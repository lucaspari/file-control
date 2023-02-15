<?php

namespace App\Http\Controllers;
use App\Http\Helpers\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
class fileController extends Controller
{
    public function analyze(Request $request){
        $sellers = $request->input('sellers');
        $customers = $request->input('customers');
        
    }
}
