<?php

use Illuminate\Support\Facades\Route;
use ModbusTcpClient\Network\BinaryStreamConnection;
use ModbusTcpClient\Packet\ModbusFunction\ReadHoldingRegistersRequest;
use ModbusTcpClient\Packet\ModbusFunction\ReadHoldingRegistersResponse;
use ModbusTcpClient\Packet\ModbusFunction\ReadInputRegistersRequest;
use ModbusTcpClient\Packet\ResponseFactory;
use ModbusTcpClient\Utils\Endian;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/test', function (){

    $return = [];
    $ip = '192.168.1.99';
    $port = 503;
    $unitId = 2;
    $startAddress = 0;
    $quantity = 4;
  //  $endianess = Endian::BIG_ENDIAN;
    $endianess = Endian::BIG_ENDIAN;
    Endian::$defaultEndian = $endianess;


    $connection = BinaryStreamConnection::getBuilder()
        ->setPort($port)
        ->setHost($ip)
        ->setConnectTimeoutSec(1.5) // timeout when establishing connection to the server
        ->setWriteTimeoutSec(0.5) // timeout when writing/sending packet to the server
        ->setReadTimeoutSec(1.0) // timeout when waiting response from server
        ->build();


    $packet = new ReadHoldingRegistersRequest($startAddress, $quantity, $unitId);

    \Illuminate\Support\Facades\Log::info('Packet to be sent (in hex): ' . $packet->toHex());

    $result = [];
    try {
        $binaryData = $connection->connect()->sendAndReceive($packet);

        \Illuminate\Support\Facades\Log::info('Binary received (in hex):   ' . unpack('H*', $binaryData)[1]);

        $response = ResponseFactory::parseResponseOrThrow($binaryData)->withStartAddress($startAddress);
        $result = [];
        foreach ($response as $address => $word) {

            $doubleWord = isset($response[$address + 1]) ? $response->getDoubleWordAt($address) : null;

            $quadWord = null;
            if (isset($response[$address + 3])) {
                $quadWord = $response->getQuadWordAt($address);
                try {
                    $UInt64 = $quadWord->getUInt64(); // some data can not be converted to unsigned 64bit int due PHP memory limitations
                } catch (\Exception $e) {
                    $UInt64 = '-';
                }
                try {
                    $Int64 = $quadWord->getInt64();
                } catch (\Exception $e) {
                    $Int64 = '-';
                }
                try {
                    $double = $quadWord->getDouble();
                } catch (\Exception $e) {
                    $double = '-';
                }

            }

            $highByteAsInt = $word->getHighByteAsInt();
            $lowByteAsInt = $word->getLowByteAsInt();


                    $result[$address] = [
                        'highByte' => '0x' . str_pad(dechex($highByteAsInt), 2, '0', STR_PAD_LEFT) . ' / ' . $highByteAsInt . ' / "&#' . $highByteAsInt . ';"',
                        'lowByte' => '0x' . str_pad(dechex($lowByteAsInt), 2, '0', STR_PAD_LEFT) . ' / ' . $lowByteAsInt . ' / "&#' . $lowByteAsInt . ';"',
                        'highByteBits' => sprintf('%08d', decbin($highByteAsInt)),
                        'lowByteBits' => sprintf('%08d', decbin($lowByteAsInt)),
                        'int16' => $word->getInt16($endianess),
                        'UInt16' => $word->getUInt16($endianess),
                        'int32' => $doubleWord ? $doubleWord->getInt32() : null,
                        'UInt32' => $doubleWord ? $doubleWord->getUInt32() : null,
                        'float' => $doubleWord ? $doubleWord->getFloat() : null,
                        'double' => $quadWord ? $double : null,
                        'Int64' => $quadWord ? $Int64 : null,
                        'UInt64' => $quadWord ? $UInt64 : null,
                    ];

        }

        dd($result);

    } catch (Exception $exception) {

        report($exception);
    } finally {
        $connection->close();
    }
dd($return);

});

Route::middleware('auth')->group(function(){
    Route::get('/', [ \App\Http\Controllers\FLowsController::class, 'index'])->name('home');
    Route::resource('/user', '\App\Http\Controllers\UsersController')->only(['edit', 'update'])->middleware('current_or_admin');

});

Route::middleware('admin')->prefix('admin')->group(function() {


    Route::resource('rodent', '\App\Http\Controllers\RodentsController')->except(['show']);
    Route::delete('rodent-type/{rodent_type}/image', [\App\Http\Controllers\RodentTypesController::class, 'deleteImage'])->name('rodent_type.delete.image');
    Route::post('rodent-type/{rodent_type}/image', [\App\Http\Controllers\RodentTypesController::class, 'uploadImage'])->name('rodent_type.upload.image');
    Route::resource('rodent-type', '\App\Http\Controllers\RodentTypesController')->except(['show']);
    Route::resource('excavation-field', '\App\Http\Controllers\ExcavationFieldsController')->except(['show']);
    Route::resource('/user', '\App\Http\Controllers\UsersController')->only(['index' ,'create', 'store', 'destroy']);
    Route::patch('/user/{user}/undelete', [\App\Http\Controllers\UsersController::class, 'undelete'])->name('user.undelete')->withTrashed();

    Route::get('phpinfo', [\App\Http\Controllers\AdminsController::class, 'phpinfo'])->name('phpinfo');
    Route::get('export/{flow}', [\App\Http\Controllers\AdminsController::class, 'export'])->name('export');

    Route::get('/konfiguracija', [\App\Http\Controllers\ConfigurationController::class, 'index'])->name('admin.configuration.index');
    Route::get('/konfiguracija/{section}', [\App\Http\Controllers\ConfigurationController::class, 'edit'])->name('admin.configuration.edit');
    Route::patch('/konfiguracija', [\App\Http\Controllers\ConfigurationController::class, 'update'])->name('admin.configuration.update');
});

/*
 * Punjenje baze za testiranje - Faker
 *
 * Route::get('/fill', function (){
    set_time_limit(0);
    $array = \Maatwebsite\Excel\Facades\Excel::import(new \App\Imports\ProtokImport(), storage_path('app/public/xxx.xls'));
});*/

