<?php

use App\Http\Controllers\Api\Crud\MembreController;
use App\Http\Controllers\Api\Crud\PayController;
use App\Http\Controllers\Api\Crud\ProjectController;
use App\Http\Controllers\Api\Crud\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// authenticated user's information
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('cors')->group(function(){
    Route::controller(AuthController::class)->group(function () {
        Route::post('auth/login', 'login');
        Route::post('auth/logout', 'logout')->middleware('auth:sanctum');
    });
    
    // CRUD routes for various resources, protected by Sanctum middleware
    Route::middleware('auth:sanctum')->prefix('crud')->group(function () {
        Route::apiResource('projects', ProjectController::class);
        Route::apiResource('pays', PayController::class);
        Route::apiResource('services', ServiceController::class);
        Route::apiResource('membres', MembreController::class);
    });

});
// Authentication routes

