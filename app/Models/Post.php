<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;


    protected $guarded = ['id'];


    public  function user()
    {
        return $this->belongsTo(User::class, 'id');
    }
    public  function category()
    {
        return $this->belongsTo(Categry::class, 'cat_id');
    }
}
