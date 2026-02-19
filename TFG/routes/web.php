<?php

use Illuminate\Support\Facades\Route;

Route::view('/{any}', 'app')->where('any', '.*');

// Route::post("/login" , [ControladorLogin::class , "algo"]);