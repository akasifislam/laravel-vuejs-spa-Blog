<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportController extends Controller
{
    public function downloadExcel()
    {
        $tags = Tag::all();
        return view('downlaod-excel', compact('tags'));
    }

    public function export()
    {
        return Excel::download(new Tag, 'tagalldata.xlsx');
    }
}
