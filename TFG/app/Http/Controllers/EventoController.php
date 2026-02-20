<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use Illuminate\Http\Request;

class EventoController extends Controller
{
    public function all(Request $request)
    {


        return Evento::when($request->ciudad, fn($q) =>
            $q->where('ciudad', $request->ciudad))
            ->when($request->titulo, fn($q) =>
                $q->where('nombre', 'like', "%{$request->titulo}%"))
            ->when($request->fecha, fn($q) =>
                $q->whereDate('fechaInicio', $request->fecha))
            ->get();

    }


}
