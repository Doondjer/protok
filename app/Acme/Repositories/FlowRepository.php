<?php

namespace App\Acme\Repositories;

use App\Models\Flow;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class FlowRepository
{

    /**
     * @param int $stationId
     * @return array[]
     */
    public function getSevenDayFlowBarData(int $stationId)
    {
        $time = Carbon::create('2019-08-25');

        $bars = Flow::where('StationId', $stationId)
            ->select(DB::raw('StationId, ROUND(sum(ValueVrednost) * 900, 1) as flow, FORMAT(CAST( Datum_date AS Date ), \'d MMM\') date, Smena as shift'))
            ->orderBy('Datum_date','desc')
            ->groupBy('StationId', 'Datum_date', 'Smena')
         //   ->whereDate('Datum_date', '>=', Carbon::today()->subDays(7)->toDate())
            ->whereDate('Datum_date', '>=', $time->subDays(7)->toDate())
          //  ->whereDate('Datum_date', '<', $time->toDate())
            ->get()
            ->groupBy(['date', 'shift']);

        return $this->createShiftSeries($bars);
    }

    /**
     * @param int $stationId
     * @param int $days
     * @return \Illuminate\Support\Collection
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public function getMultidayFlowSeriesData(int $stationId, int $days)
    {
        $flows = Flow::select(DB::raw('DatumVreme as date_time, ROUND(ValueVrednost * 3600, 1) as flow, id'))
            ->where('StationId', $stationId)
            ->whereRaw("CAST(DatumVreme as datetime) >= '" . Carbon::now()->subDays($days) . "'")
            ->orderBy('DatumVreme', 'desc')
            ->get();

        return collect($flows ?? [])->map(fn ($dateRow) => [
            $dateRow->date_time, $dateRow->flow
        ]);
    }

    /**
     * @return mixed
     */
    public function getCurrentFlowData()
    {
        return Flow::select(DB::raw('ROUND(avg(ValueVrednost) * 3600,1) as ValueVrednost, StationId, DatumVreme'))
            ->whereRaw("CAST(DatumVreme as datetime) >= '" . Carbon::now()->subMinutes(15) . "'")
            ->groupBy('StationId', 'DatumVreme')
            ->orderBy(DB::raw('CAST( DatumVreme AS Date )'),'desc')
            ->pluck('ValueVrednost', 'StationId')->toArray();
    }

    /**
     * @return mixed
     */
    public function getPanelGraphData()
    {
        $time = Carbon::create('2019-07-6');
        return Flow::select(
            DB::raw('sum(ValueVrednost * 900) as shift_flow, count(ValueVrednost) as nb_flows, Smena as shift, StationId as station_id')
        )
            //    ->whereRaw("CAST(DatumVreme as datetime) >= '" . $time . "'")
             //   ->whereRaw("CAST(DatumVreme as datetime) < '" . $time->addDay() . "'")
              ->whereRaw("CAST(DatumVreme as datetime) >= '" . $this->getStartDateTime() . "'")
            ->groupBy('StationId', 'Smena')
            ->get()
            ->groupBy('station_id');
    }

    /**
     * @return mixed
     */
    public function getPanelData()
    {

        $time = Carbon::create('2019-07-6');

        return Flow::select(
            DB::raw('count(ValueVrednost) as nb_flows, StationId as station_id, Datum_date as date, Smena as shift, sum(ValueVrednost * 900) as total_flow, avg(ValueVrednost * 3600) as current_flow')
        )
          //  ->whereRaw("CAST(DatumVreme as datetime) >= '" . $time . "'")
          //  ->whereRaw("CAST(DatumVreme as datetime) < '" . $time->addDay() . "'")
            ->whereRaw("CAST(DatumVreme as datetime) >= '" . $this->getStartDateTime() . "'")
            ->groupBy('StationId', 'Datum_date', 'Smena')
            ->orderByRaw('StationId asc, Datum_date asc, Smena asc')
            ->get()->groupBy('station_id');
    }

    protected function getStartDateTime()
    {
        return Carbon::now()->between(Carbon::today(), Carbon::now()->setTime(07, 00, 00))
            ? Carbon::yesterday()->setTime(07,00,00)
            : Carbon::today()->setTime(07,00,00);
    }

    /**
     * Create Array to feed 7 day Bar
     * chart splitet by shifts
     *
     * @param $bars
     * @return array
     */
    protected function createShiftSeries($bars): array
    {
        $firstShift     = [ 'name' => 'I Smena',  'type' => 'bar',  'data' => []];
        $secondShift    = [ 'name' => 'II Smena',  'type' => 'bar', 'data' => []];
        $thirdShift     = [ 'name' => 'III Smena', 'type' => 'bar', 'data' => []];
        $totalFlow      = [ 'name' => 'Ukupno Iskopano', 'type' => 'line', 'data' => []];

        foreach ($bars as $date => $items) {

            $total = 0;

            if (!$items->has(1)) {
                $firstShift['data'][] = ['x' => $date, 'y' => 0];
            }
            if (!$items->has(2)) {
                $secondShift['data'][] = ['x' => $date, 'y' => 0];
            }
            if (!$items->has(3)) {
                $thirdShift['data'][] = ['x' => $date, 'y' => 0];
            }

            foreach ($items as $item) {
                if (isset($item[0]) && $item[0]->shift == 1) {
                    $firstShift['data'][] = ['x' => $date, 'y' => $item[0]->flow];
                }
                if (isset($item[0]) && $item[0]->shift == 2) {
                    $secondShift['data'][] = ['x' => $date, 'y' => $item[0]->flow];
                }
                if (isset($item[0]) && $item[0]->shift == 3) {
                    $thirdShift['data'][] = ['x' => $date, 'y' => $item[0]->flow];
                }
                $total += $item[0]->flow;
            }

            $totalFlow['data'][] = ['x' => $date, 'y' => $total];


        }

        return [$firstShift, $secondShift, $thirdShift, $totalFlow];
    }
}
