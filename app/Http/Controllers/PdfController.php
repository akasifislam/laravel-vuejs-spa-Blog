<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use PDF;

class PdfController extends Controller
{
    public function downloadTagPdf()
    {
        $data = Tag::all();
        $pdf = PDF::loadView('tag', compact('data'));
        $pdf->save(storage_path('app/public/pdf/example.pdf'));
        // $pdf->save(Storage::putFileAs("public/pdf/example.pdf"));
        $myFile = public_path("storage/pdf/example.pdf");
        $headers = ['Content-Type: application/pdf'];
        $newName = "example.pdf";
        return response()->download($myFile, $newName, $headers);
    }
}
