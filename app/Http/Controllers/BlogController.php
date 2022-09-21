<?php

namespace App\Http\Controllers;

use App\Models\blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blogs = Blog::latest('id')->with('category', 'user')->get();
        return response()->json($blogs, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $exploded_image = explode(",", $request->photo);
        $decoded = base64_decode($exploded_image[1]);
        if (str_contains($exploded_image[0], 'jpeg'))
            $extention = 'jpg';
        else
            $extention = 'png';
        $fileName = time() . '_' . uniqid() . '.' . $extention;
        $path = public_path() . '/' . $fileName;

        file_put_contents($path, $decoded);

        $this->validate($request, [
            'photo' => 'required',
            'title' => 'required|string|min:5',
            'description' => 'required|string|min:10'
        ]);

        $post = new Blog([
            'title' => $request->title,
            'description' => $request->description,
            'cat_id' => $request->cat_id,
            'photo' => $fileName,
        ]);
        $post->save();

        return response()->json('Post created!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(blog $blog)
    {
        //
    }
}
