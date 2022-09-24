<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategryController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\MessageController;
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
Route::apiResource('blogs', BlogController::class);


Route::get('tags/export/{tag}', [TagController::class, 'downloadExcel'])->name('tags.export');


// Route::post('/tag-all', [PdfController::class, 'getAllTagsPdf']);
Route::post('/tag-all-pdf', [PdfController::class, 'downloadTagPdf']);
Route::post('/excel-all', [ExportController::class, 'downloadExcel']);


Route::get('/blog-posts', [FrontendController::class, 'blogPosts']);
Route::get('/single-post/{id}', [FrontendController::class, 'blogSinglePost']);
Route::get('/categories-post/{id}', [FrontendController::class, 'blogCategoryPost']);
Route::get('/search', [FrontendController::class, 'blogSearch']);








// =================== DropZone ================ 

Route::post('sendmessage', [MessageController::class, 'store']);





Route::get('/tags/pdf', function () {
    return view('invoice');
});
