<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {



        if ($request->file('file')) {

            // get name of file
            $file = $request->file('file');
            $fileName =  $file->getClientOriginalName();

            $fileName = str_replace(' ', '', $fileName);
            $path = $file->storeAs('uploads', $fileName);
            // $path = $request->file('file')->store('uploads');
            if ($path) {
                return response()->json(['message' => 'route reached'], 200);
            }
        } else {
            return response()->json(["message" => 'error uploading'], 503);
        }
    }
}
