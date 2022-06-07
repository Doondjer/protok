<?php

namespace App\Console\Commands;

use App\Events\NewCurrentFlow;
use Carbon\Carbon;
use Illuminate\Console\Command;


use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use ModbusTcpClient\Network\BinaryStreamConnection;
use ModbusTcpClient\Packet\ModbusFunction\ReadHoldingRegistersRequest;
use ModbusTcpClient\Packet\ResponseFactory;
use ModbusTcpClient\Utils\Endian;

class ReadCurrentFlow extends Command
{
    /**
     * Modbus Server Ip Address
     * @var string
     */
    private $ip = '192.168.1.99';

    /**
     * Modbus Server Port
     * @var int
     */
    private $port = 503;

    /**
     * Modbus Server ID
     * @var int
     */
    private $unitId = 2;

    /**
     * Modbus Server Data Address
     * @var int
     */
    private $startAddress = 0;

    /**
     * Modbus Server Data Length
     * @var int
     */
    private $quantity = 6;

    /**
     * Modbus Server Endian Type
     * @var int
     */
    private $endianess = Endian::BIG_ENDIAN;

    /**
     * @var array
     */
    private $currentFlow = [];

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'read:current_flow';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will read current flow, rodent id and status';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $connection = BinaryStreamConnection::getBuilder()
            ->setPort($this->port)
            ->setHost($this->ip)
            ->setConnectTimeoutSec(1.5) // timeout when establishing connection to the server
            ->setWriteTimeoutSec(0.5) // timeout when writing/sending packet to the server
            ->setReadTimeoutSec(1.0) // timeout when waiting response from server
            ->build();


        $packet = new ReadHoldingRegistersRequest($this->startAddress, $this->quantity, $this->unitId);

       $this->info('Packet to be sent (in hex): ' . $packet->toHex());

        try {
            $binaryData = $connection->connect()->sendAndReceive($packet);

    //        Log::info('Binary received (in hex):   ' . unpack('H*', $binaryData)[1]);
            $this->info('Binary received (in hex):   ' . unpack('H*', $binaryData)[1]);

            $response = ResponseFactory::parseResponseOrThrow($binaryData)->withStartAddress($this->startAddress);

            foreach ($response as $address => $word) {

                $doubleWord = isset($response[$address + 1]) ? $response->getDoubleWordAt($address) : null;

                switch ($address){
                    case 0:
                        $this->currentFlow['next_rodent_id'] =  $word->getUInt16();
                        break;
                    case 1:
                        $this->currentFlow['rodent_id'] =  $word->getUInt16();
                        break;
                    case 2:
                        $this->currentFlow['current_flow'] = $doubleWord ? round($doubleWord->getFloat($this->endianess) * 3600,1): null;
                        break;
                    case 3:
                        $this->currentFlow['date_time'] = sprintf('%08d', decbin($word->getLowByteAsInt()));
                        break;
                    case 4:
                        $this->currentFlow['status'] = sprintf('%08d', decbin($word->getLowByteAsInt()));
                        break;
                    default:
                }
            }

        } catch (\Exception $exception) {

            report($exception);
        } finally {
            $connection->close();
        }

       // Cache::forget('rodent:id');

    /*
        $this->currentFlow['next_rodent_id'] = 6;
        $this->currentFlow['rodent_id'] = 6;
        $this->currentFlow['current_flow'] = 5000;
        $this->currentFlow['status'] = '11111111';
        */
        dump($this->currentFlow);

        if($this->currentFlow && ($this->currentFlow['next_rodent_id'] - Cache::get('rodent:id') > 1) && $this->currentFlow['next_rodent_id'] != 1) {

            $this->dispatchBlankStatus($this->currentFlow['next_rodent_id'] - 1, $this->currentFlow['next_rodent_id']);
        }
        if($this->currentFlow && $this->currentFlow['next_rodent_id'] == 1 && Cache::get('rodent_id') != config('app_settings.values.nb_rodents')) {

            $this->dispatchBlankStatus(config('app_settings.values.nb_rodents'), $this->currentFlow['next_rodent_id']);
        }

        dump($this->validate($this->currentFlow));

        if($this->validate($this->currentFlow)) {

            Cache::put('rodents:' . Arr::get($this->currentFlow, 'rodent_id', null), $this->currentFlow, config('app_settings.values.max_rodents_scan_cycle'));

            Cache::put('rodent:id', Arr::get($this->currentFlow, 'rodent_id', null));
            Cache::put('next:rodent:id', Arr::get($this->currentFlow, 'next_rodent_id', null));
            Cache::put('rodent:time', Carbon::now());

        } else {
      //      Log::error('Greska podataka dobijenih preko modbusa, Proveriti dump preko komande read:current_flow', (array) $this->currentFlow);
            $this->info('Greska u dobijenim podacima preko modbusa');

            $this->info('Current Flow:   ');
            dd($this->currentFlow);
        }



        NewCurrentFlow::dispatch($this->currentFlow);
    }

    /**
     * @param mixed $rodentToSkip
     * @return void
     */
    private function dispatchBlankStatus(mixed $rodentToSkip, int $nextRodent): void
    {
        $response = [
            'next_rodent_id' => $nextRodent,
            'rodent_id' => $rodentToSkip,
            'current_flow' => 0,
            'status' => '00000000',
        ];

        Cache::put("rodents:$rodentToSkip", $response, config('app_settings.values.max_rodents_scan_cycle'));

        NewCurrentFlow::dispatch($response);
    }

    public function validate(array $currentFlow)
    {
        return is_integer(Arr::get($currentFlow, 'next_rodent_id', null))
            && is_integer(Arr::get($currentFlow, 'rodent_id', null))
            && is_numeric(Arr::get($currentFlow, 'current_flow', null)) && ! is_nan(Arr::get($currentFlow, 'current_flow', null))
            && is_string(Arr::get($currentFlow, 'date_time', null))
            && is_string(Arr::get($currentFlow, 'status', null));
    }
}
