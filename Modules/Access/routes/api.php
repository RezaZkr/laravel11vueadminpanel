<?php

use Illuminate\Support\Facades\Route;
use Modules\Access\Http\Controllers\Panel\PermissionController;
use Modules\Access\Http\Controllers\Panel\RoleController;


Route::middleware('auth:panel')->group(function () {

    Route::apiResource('/roles', RoleController::class);
    Route::apiResource('/permissions', PermissionController::class);

});
