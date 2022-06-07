<?php

namespace App\Http\Controllers;

use App\Events\NewCurrentFlow;
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

        NewCurrentFlow::dispatch(['maintenance' => true]);

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

    public function dashboard()
    {
        return view('admin.dashboard.index');
    }

    public function server_usage()
    {
        //RAM usage
        $free = shell_exec('free');
        $free = (string) trim($free);
        $free_arr = explode("\n", $free);
        $mem = explode(" ", $free_arr[1]);
        $mem = array_filter($mem);
        $mem = array_merge($mem);
        $usedmem = $mem[2];
        $usedmemInGB = number_format($usedmem / 1048576, 2);

        $fh = fopen('/proc/meminfo', 'r');
        $mem = 0;
        while ($line = fgets($fh)) {
            $pieces = array();
            if (preg_match('/^MemTotal:\s+(\d+)\skB$/', $line, $pieces)) {
                $mem = $pieces[1];
                break;
            }
        }
        fclose($fh);
        $totalram = number_format($mem / 1048576, 2);

        //cpu usage
        $cpu_load = sys_getloadavg();
        $load = $cpu_load[0];

        return response()->json(compact(
            'totalram',
            'usedmemInGB',
            'load'
        ));
    }
}
