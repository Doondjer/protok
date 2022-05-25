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

});

Route::middleware('auth')->group(function(){
    Route::get('/', [ \App\Http\Controllers\FLowsController::class, 'index'])->name('home');
    Route::resource('/user', '\App\Http\Controllers\UsersController')->only(['edit', 'update'])->middleware('current_or_admin');

});

Route::middleware('admin')->prefix('admin')->group(function() {
    Route::get('maintenance', [\App\Http\Controllers\AdminsController::class, 'maintenance'])->name('admin.maintenance');

    Route::post('shut/down', [\App\Http\Controllers\AdminsController::class, 'down'])->name('admin.maintenance.down');

    Route::get('bring/up', [\App\Http\Controllers\AdminsController::class, 'up'])->name('admin.maintenance.up');

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

