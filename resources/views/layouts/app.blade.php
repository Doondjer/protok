<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>@yield('title', 'Dashboard - ' . config('app_settings.values.app_name'))</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="msapplication-TileColor" content="#206bc4">
        <meta name="theme-color" content="#206bc4">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320">
        <link rel="icon" href="{{ config('app_settings.values.favicon_url') }}" type="image/x-icon">
        <link rel="shortcut icon" href="{{ config('app_settings.values.favicon_url') }}" type="image/x-icon">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/tabler.css') }}">

        <script>
            {{--window._app_config = @json(config('app_settings.values'));--}}
        </script>
        @yield('addl-css')
        @yield('addl-head')
    </head>
    <body class="">
        @yield('main-body-content')
    </body>
</html>
