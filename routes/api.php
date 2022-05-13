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
    Route::get('/chart/station/{station}', [\App\Http\Controllers\ChartsController::class, 'station'])->name('chart.station.api');
    Route::get('/table/station', [\App\Http\Controllers\ChartsController::class, 'table'])->name('table.station.api');
    Route::get('/api/panel', [\App\Http\Controllers\FLowsController::class, 'apiData'])->name('panel.api');
});


