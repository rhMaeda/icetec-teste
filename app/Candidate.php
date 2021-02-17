<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    protected $fillable = ['name','email','age','url','stack'];
    protected $casts = [
        'stack' => 'array'
    ];
}


