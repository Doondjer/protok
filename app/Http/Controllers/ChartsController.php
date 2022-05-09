<?php

namespace App\Http\Controllers;

use App\Acme\Repositories\FlowRepository;
use App\Models\Flow;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\DB;

class ChartsController extends Controller
{
    private FlowRepository $flowRepository;

    public function __construct()
    {
        $this->flowRepository = new FlowRepository();
    }
    /**
     * Get Data for Main Chart
     *
     * @param int $days
     * @return \Illuminate\Http\JsonResponse
     */
    public function station($stationId)
    {
        $series = $this->flowRepository->getSevenDayFlowBarData($stationId);

       /* $days = (int) request('days', config('app_settings.values.multiday_default_days')) < config('app_settings.values.multiday_max_days')
        && (int)request('days', config('app_settings.values.multiday_default_days')) > 0
            ? (int) request('days', config('app_settings.values.multiday_default_days')) : config('app_settings.values.multiday_default_days');
dump(request('days'));
dd($days);*/
        $data = $this->flowRepository->getMultidayFlowSeriesData($stationId, (int) request('days'));

        return response()->json([
            'data' => $data,
            'series' => $series,
        ],Response::HTTP_OK);
    }

    public function table()
    {
        $size = (int) request('per_page') < config('app_settings.values.flow_paginate_allowed')
                && (int)request('per_page') > 0
            ? (int) request('per_page') : config('app_settings.values.flow_paginate_default');

        $data = Flow::select(DB::raw('DatumVreme as date_time, Smena as shift, ROUND(ValueVrednost * 3600, 1) as flow, id'))
            ->where('StationId', (int) request('rodent'))
            ->orderBy('DatumVreme', 'desc')
            ->paginate($size)
            ->withQueryString();

        return response()->json([
            'data' => $data
        ],Response::HTTP_OK);
    }


}
