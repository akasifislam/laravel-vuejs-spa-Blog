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

            //*************/ get name of file
            // $file = $request->file('file');
            // $fileName =  $file->getClientOriginalName();

            // $fileName = str_replace(' ', '', $fileName);
            // $path = $file->storeAs('uploads', $fileName);
            // if ($path) {
            //     return response()->json(['message' => 'route reached'], 200);
            // }
            /**
             * multiple file upload
             * multiple image upload
             */
            $files = $request->file('file');
            if (!is_array($files)) {
                $files = [$files];
            }
            // loop the array
            for ($i = 0; $i < count($files); $i++) {
                $file = $files[$i];
                $fileName =  $file->getClientOriginalName();
                $fileName = str_replace(' ', '', $fileName);
                $file->storeAs('uploads', $fileName);
            }
            return response()->json(['message' => 'route reached'], 200);
        } else {
            return response()->json(["message" => 'error uploading'], 503);
        }
    }
}
