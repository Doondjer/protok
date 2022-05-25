@extends('layouts.main')

@section('body-content')
        <panel
            :rodent_list="{{ json_encode($rodents) }}"
            :panel_flows="{{ json_encode($panelFlows) }}"
            :graph_data="{{ json_encode($graphData) }}"
            :current_flows="{{ json_encode($currentFlows) }}"
            :user="{{ json_encode($user) }}"
        >
        </panel>
@stop
