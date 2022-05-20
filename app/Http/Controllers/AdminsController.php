<?php

namespace App\Http\Controllers;

use App\Exports\FlowExport;
use App\Http\Requests\ExportRequest;
use App\Models\Flow;
use App\Models\Rodent;
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

    public function export(ExportRequest $request)
    {
        return Excel::download(new FlowExport($request->validated()), 'protok.xlsx');
    }
}
