<?php

namespace App\Http\Controllers;
use App\Http\Helpers\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
class fileController extends Controller
{
    public function analyze(Request $request){
        $file = $request;
        $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        $out->writeln($file);
  
    }
}
