<?php

use Illuminate\Support\Facades\Route;
use Modules\Auth\Http\Controllers\Panel\PanelAuthController;

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

Route::prefix('axios')->group(function () {

    Route::post('/login', [PanelAuthController::class, 'login'])->name('login')->middleware('guest');

});
