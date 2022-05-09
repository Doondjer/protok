<?php

use Illuminate\Support\Facades\Route;

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
Route::middleware('auth')->group(function(){
    Route::get('/', [ \App\Http\Controllers\FLowsController::class, 'index'])->name('home');
});
Route::middleware('admin')->prefix('admin')->group(function() {

    Route::resource('rodent', '\App\Http\Controllers\RodentsController')->except(['show']);
    Route::resource('excavation-field', '\App\Http\Controllers\ExcavationFieldsController')->except(['show']);

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

