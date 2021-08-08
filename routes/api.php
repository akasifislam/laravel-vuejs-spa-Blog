<?php

use App\Http\Controllers\CategryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::apiResource('posts', PostController::class);
Route::apiResource('categories', CategryController::class);
Route::apiResource('tags', TagController::class);

Route::get('acategories/{id}', [CategryController::class, 'deleteCategory']);
Route::get('acategory/{id}', [CategryController::class, 'editCategory']);
Route::post('acategories-update/{id}', [CategryController::class, 'updateCategory']);
