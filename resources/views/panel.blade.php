@extends('layouts.main')

@section('body-content')
        <panel
            :rodent_list="{{ json_encode($rodents) }}"
            :panel_flows="{{ json_encode($panelFlows) }}"
            :graph_data="{{ json_encode($graphData) }}"
            :current_flows="{{ json_encode($currentFlows) }}"
            :cached_statuses="{{ json_encode($statuses) }}"
            :user="{{ json_encode($user) }}"
        >
        </panel>
@stop
