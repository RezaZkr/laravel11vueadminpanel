<?php

use Illuminate\Support\Facades\Route;
use Modules\Access\Http\Controllers\Panel\AccessController;


Route::middleware('auth:panel')->group(function () {

    Route::apiResource('/roles', AccessController::class);

});
