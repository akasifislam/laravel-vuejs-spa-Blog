<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function blogPosts()
    {
        // return "ok";
        $blogs = Blog::latest('id')->with('category', 'user')->get();
        return response()->json($blogs, 200);
    }
}
