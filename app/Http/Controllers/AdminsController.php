<?php

namespace App\Http\Controllers;

use App\Exports\FlowExport;
use App\Models\Flow;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class AdminsController extends Controller
{
    /**
     * View server php info on admins page
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function phpinfo()
    {
        return view('admin.phpinfo.index');
    }

    public function export(Flow $flow)
    {
        return Excel::download(new FlowExport($flow, Carbon::yesterday()->subMonths(40), Carbon::now()), 'protok.xlsx');
    }
}
