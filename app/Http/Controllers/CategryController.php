<?php

namespace App\Http\Controllers;

use App\Models\Categry;
use Illuminate\Http\Request;

class CategryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Categry::latest('id')->get();

        return response()->json($categories, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        dd("mfndfkjngkjd");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return "asif";

        $this->validate($request, [
            'cat_name' => 'required|min:5'
        ]);

        $categry = new Categry([
            'cat_name' => $request->cat_name,
        ]);
        $categry->save();

        return response()->json('Category created!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categry  $categry
     * @return \Illuminate\Http\Response
     */
    public function show(Categry $category)
    {
        return response()->json($category, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categry  $categry
     * @return \Illuminate\Http\Response
     */
    public function edit(Categry $category)
    {
        return $category;
        return response()->json($category, 200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categry  $categry
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Categry $category)
    {
        $category->update($request->all());
        return response()->json('Category updated!');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categry  $categry
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categry $category)
    {
        $category->delete();
        return response()->json([
            'success' => true,
            'message' => 'Category Deleted'
        ], 200);
    }
}
