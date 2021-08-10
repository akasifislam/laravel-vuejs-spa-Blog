<?php

use App\Http\Controllers\CategryController;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});






Route::apiResource('posts', PostController::class);
Route::apiResource('categories', CategryController::class);
Route::apiResource('tags', TagController::class);


Route::get('tags/export/{tag}', [TagController::class, 'downloadExcel'])->name('tags.export');


Route::post('/tag-all', [PdfController::class, 'getAllTagsPdf']);
Route::get('/tag-all-pdf', [PdfController::class, 'downloadTagPdf']);





Route::get('/tags/pdf', function () {
    return view('invoice');
});
