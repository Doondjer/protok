<?php

namespace App\Exports;

use App\Models\Flow;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;

class FlowExport implements FromQuery
{
    use Exportable;

    protected $flow;

    protected $start;

    protected $end;

    public function __construct(Flow $flow, Carbon $start, Carbon $end)
    {
        $this->flow = $flow;

        $this->start = $start;

        $this->end = $end;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Relations\Relation|\Illuminate\Database\Query\Builder
     */
    public function query()
    {
        return Flow::query()->select(DB::raw('id, ROUND(ValueVrednost * 3600, 1) as flow, DatumVreme as date_time'))
                    ->where('StationId', $this->flow->StationId)
                    ->whereRaw("CAST(DatumVreme as datetime) >= '" . $this->start . "'")
                    ->whereRaw("CAST(DatumVreme as datetime) < '" . $this->end . "'")
                    ->orderBy('DatumVreme', 'desc');
    }
}
