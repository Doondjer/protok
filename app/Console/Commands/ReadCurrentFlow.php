<?php

namespace App\Console\Commands;

use App\Events\NewCurrentFlow;
use Carbon\Carbon;
use Illuminate\Console\Command;


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
    private $quantity = 4;

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

        Log::info('Packet to be sent (in hex): ' . $packet->toHex());

        try {
            $binaryData = $connection->connect()->sendAndReceive($packet);

            Log::info('Binary received (in hex):   ' . unpack('H*', $binaryData)[1]);

            $response = ResponseFactory::parseResponseOrThrow($binaryData)->withStartAddress($this->startAddress);

            foreach ($response as $address => $word) {

                $doubleWord = isset($response[$address + 1]) ? $response->getDoubleWordAt($address) : null;

                switch ($address){
                    case 0:
                        $this->currentFlow['rodent_id'] =  $word->getUInt16();
                        break;
                    case 1:
                        $this->currentFlow['current_flow'] = $doubleWord ? round($doubleWord->getFloat($this->endianess) * 3600,1): null;
                        break;
                    case 3:
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
        $this->currentFlow['rodent_id'] = 5;
        $this->currentFlow['current_flow'] = 5000;
        $this->currentFlow['status'] = 00101010;

        $this->info('Rodent id in cache: ' . Cache::get('rodent:id') ?: null);
        $this->info('Current Rodent id: ' . $this->currentFlow['rodent_id']);

        // Ukoliko je preskocio bager dok je iscitani manji od ukupnog broja bagera
        if(Cache::get('rodent:id') && $this->currentFlow['rodent_id'] && ($this->currentFlow['rodent_id'] - Cache::get('rodent:id')) > 1) {

                for ($rodentToSkip = Cache::get('rodent:id') + 1; $rodentToSkip < $this->currentFlow['rodent_id']; $rodentToSkip++){
                    $this->dispatchBlankStatus($rodentToSkip);
                }
        }

        if (
            (Cache::get('rodent:id') > $this->currentFlow['rodent_id'] && Cache::get('rodent:id') < config('app_settings.values.nb_rodents')) // Ukoliko je preskocio bager koji je manji od 12 a iscitao bager veci od 1
            || Carbon::now()->diffInSeconds(Cache::get('rodent:time')) > config('app_settings.values.max_rodents_scan_cycle') // Ako ne vidi nijedan bager tj receive u db4 ostane na prethodno vidjenom bageru
        ) {

            for ($rodentToSkip = Cache::get('rodent:id') + 1; $rodentToSkip <= 12; $rodentToSkip++) {
                $this->info('skiped '.$rodentToSkip);
                $this->dispatchBlankStatus($rodentToSkip);
            }

            if($this->currentFlow['rodent_id'] != 1){
                for ($rodentToSkip = 1; $rodentToSkip < $this->currentFlow['rodent_id']; $rodentToSkip++) {
                    $this->info('skiped '.$rodentToSkip);
                    $this->dispatchBlankStatus($rodentToSkip);
                }
            }
        }

        Cache::put('rodent:id', $this->currentFlow['rodent_id']);
        Cache::put('rodent:time', Carbon::now());

        NewCurrentFlow::dispatch($this->currentFlow);
    }

    /**
     * @param mixed $rodentToSkip
     * @return void
     */
    private function dispatchBlankStatus(mixed $rodentToSkip): void
    {
        NewCurrentFlow::dispatch([
            'rodent_id' => $rodentToSkip,
            'current_flow' => 0,
            'status' => '00000000',
        ]);
    }
}
