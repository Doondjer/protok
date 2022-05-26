<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->group(function(){

    Route::post('export', [\App\Http\Controllers\AdminsController::class, 'export'])->name('export');

    Route::get('/chart/station/{station}', [\App\Http\Controllers\ChartsController::class, 'station'])->name('chart.station.api');
    Route::get('/table/station', [\App\Http\Controllers\ChartsController::class, 'table'])->name('table.station.api');
    Route::get('/api/panel', [\App\Http\Controllers\FLowsController::class, 'apiData'])->name('panel.api');



    Route::middleware('admin')->group(function() {

        Route::get('/server/usage', [\App\Http\Controllers\AdminsController::class, 'server_usage'])->name('admin.server_usage');
        Route::post('/rodent-type/{rodent_type}/attribute', [\App\Http\Controllers\RodentAttributesController::class, 'store'])->name('rodent_attribute.store.api');
        Route::delete('/rodent-type/{rodent_type}/attribute/{attribute}', [\App\Http\Controllers\RodentAttributesController::class, 'destroy'])->name('rodent_attribute.destroy.api');
    });
 });


