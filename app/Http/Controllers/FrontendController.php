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


    public function blogSinglePost($id)
    {
        // return "ok";
        $blog = Blog::with('user', 'category')->where('id', $id)->first();
        return response()->json([
            'post' => $blog
        ]);
    }

    public function blogCategoryPost($id)
    {
        // return "ok";
        $blog = Blog::with('user', 'category')->where('cat_id', $id)->get();
        return response()->json([
            'posts' => $blog
        ]);
    }
}
