<?php

namespace App\Exports;

use App\Models\Tag;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;

class TagsExport implements FromQuery
{
    use Exportable;
    protected $tags;

    public function __construct($tags)
    {
        $this->tags = $tags;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function query()
    {
        return Tag::query()->whereKey($this->tags);
    }
}
