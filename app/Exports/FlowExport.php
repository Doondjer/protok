<?php

namespace App\Exports;

use App\Models\Flow;
use App\Models\Rodent;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;

class FlowExport implements FromQuery, WithHeadings
{
    use Exportable;

    protected $flow;

    protected $start;

    protected $end;

    public function __construct(array $data)
    {
        $this->rodentId = $data['rodent_id'];

        $this->start = $data['date_start'];

        $this->end = $data['date_end'];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Relations\Relation|\Illuminate\Database\Query\Builder
     */
    public function query()
    {
        return Flow::query()->select(DB::raw('id, ROUND(ValueVrednost * 3600, 1) as flow, DatumVreme as date_time'))
                    ->where('StationId', $this->rodentId)
                    ->whereRaw("CAST(DatumVreme as datetime) >= '" . Carbon::create($this->start) . "'")
                    ->whereRaw("CAST(DatumVreme as datetime) < '" . Carbon::create($this->end) . "'")
                    ->orderBy('DatumVreme', 'desc');
    }

    public function headings(): array
    {
        return ["Id Protoka", "Protok [m3/h]", "Vreme"];
    }
}
