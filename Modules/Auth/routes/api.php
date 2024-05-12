<?php

use Illuminate\Support\Facades\Route;
use Modules\Auth\Http\Controllers\Panel\AuthController;

/*
 *--------------------------------------------------------------------------
 * API Routes
 *--------------------------------------------------------------------------
 *
 * Here is where you can register API routes for your application. These
 * routes are loaded by the RouteServiceProvider within a group which
 * is assigned the "api" middleware group. Enjoy building your API!
 *
*/


Route::post('/login', [AuthController::class, 'login'])->name('login')->middleware('guest:panel');

Route::middleware('auth:panel')->group(function () {

    Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

});

