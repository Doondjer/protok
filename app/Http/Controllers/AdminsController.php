<?php

namespace App\Http\Controllers;

use App\Exports\FlowExport;
use App\Http\Requests\ExportRequest;
use App\Models\Flow;
use App\Models\Rodent;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;

class AdminsController extends Controller
{
    public function maintenance()
    {
        return view('admin.maintenance.index');
    }

    public function down(Request $request)
    {
        if(app()->isDownForMaintenance()) {

            return redirect()->back()->with('error', 'Aplikacija se već nalazi u modu Održavanja!');
        }

        $request->validate(['secret' => 'nullable|string|min:12']);

        $secret = $request->get('secret') ?: Str::uuid();

        Artisan::call("down --refresh=60 --secret=$secret");

        cache()->put('maintenance:mode:data', [
            'secret' => $secret,
            'maintenance_started' => Carbon::now()
        ]);

        return redirect("/$secret");
    }

    public function up()
    {
        if( ! app()->isDownForMaintenance()) {

            return redirect()->back()->with('error', 'Aplikacija se nije ni nalazila u modu Održavanja!');
        }

        Artisan::call('up');
        cache()->delete('maintenance:mode:data');

        return redirect(route('home'))->with('success', 'Aplikacija se više ne nalazi u modu Održavanja');
    }

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
