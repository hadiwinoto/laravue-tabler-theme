<?php

namespace App\Http\Controllers\Tiket;

use App\Http\Controllers\Controller;
use App\Models\Models\tiket\mTiket;
use Illuminate\Http\Request;

class TiketController extends Controller
{
    public function __construct()
    {
        $this->tiket = new mTiket();
        
    }
    public function ShowTiket(){

        return view('pages.tiket.tiket');
    }
    public function ShowDetail(){

        return view('pages.tiket.detail');
    }

    public function ShowInfoUmum(){

        return view('pages.tiket.infoumum');
    }
    public function getAllDataTiket(){
        $data = $this->tiket->get();

        return response()->json([
            'data' => $data
        ]);
    }
}
