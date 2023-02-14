<?php

namespace App\Http\Controllers;
use App\Http\Helpers\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
class fileController extends Controller
{
    public function analyze(Request $request){
        $data = $request->json()->all();
        // Print the PHP array
        error_log($request);
    }
}
