@extends('layouts.main')

@section('addl-head')
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
@endsection

@section('body-content')
    <web-sockets

        :auth_endpoint="'{{ url(request()->path().'/auth') }}'"
        :api_endpoint="'{{ url(request()->path().'/api') }}'"
        :event_endpoint="'{{ url(request()->path().'/event') }}'"
        :log_channel_prefix="'{{ \BeyondCode\LaravelWebSockets\Dashboard\DashboardLogger::LOG_CHANNEL_PREFIX }}'"
        :csrf_token="'{{ csrf_token() }}'"
    ></web-sockets>
@endsection
