<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = 'evento';
    protected $fillable = [
        'nombre',
        'ciudad',
        'fechaInicio',
        'tipoEvento',
        'idFestival',
        'url_image'


    ];

    public $timestamps = false;
}
