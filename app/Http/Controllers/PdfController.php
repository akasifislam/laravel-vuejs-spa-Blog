<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use PDF;

class PdfController extends Controller
{
    public function getAllTagsPdf()
    {
        $tags = Tag::all();
        return view('tag', compact('tags'));
    }

    public function pdf()
    {
        $pdf = PDF::loadView('tag', compact('data'));
        $pdf->save(storage_path('app/public/pdf/example.pdf'));
        $myFile = public_path("storage/pdf/example.pdf");
        $headers = ['Content-Type: application/pdf'];
        $newName = "example.pdf";
        return response()->download($myFile, $newName, $headers);
    }
}
