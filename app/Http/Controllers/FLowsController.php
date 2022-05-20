<?php

namespace App\Http\Controllers;

use App\Acme\Repositories\FlowRepository;
use App\Http\Resources\RodentCollection;
use App\Http\Resources\RodentResource;
use App\Models\Rodent;
use Illuminate\Http\Response;

class FLowsController extends Controller
{
    private FlowRepository $flowRepository;

    public function __construct()
    {
        $this->flowRepository = new FlowRepository();
    }

    public function index()
    {
        $rodents = RodentResource::collection(
            Rodent::with('excavationField')
            ->with('rodentType.rodentAttributes')
            ->orderBy('rodent_id')
            ->get()

        )->keyBy->rodent_id;

        $panelFlows = $this->flowRepository->getPanelData();

        $graphData = $this->flowRepository->getPanelGraphData();

        $currentFlows = $this->flowRepository->getCurrentFlowData();

        return view('panel', compact(
            'panelFlows',
            'graphData',
            'currentFlows',
            'rodents'
        ));
    }

    public function apiData()
    {
        $totalFlows = $this->flowRepository->getPanelData();

        $graphData = $this->flowRepository->getPanelGraphData();

        $currentFlows = $this->flowRepository->getCurrentFlowData();

        return response()->json([
            'data' => compact('totalFlows', 'graphData', 'currentFlows')
        ],Response::HTTP_OK);
    }
}
