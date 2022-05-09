@extends('layouts.app')

@section('main-body-content')
<div class="page">

    @include('partials.top_navigation_bar')

    <div class="wrapper" id="app">
        <div class="page-wrapper">
            <div class="container-xl">
                @include('partials.top_messages')

                @yield('body-header')

            </div>
            <div class="page-body">
                @yield('body-content')
            </div>
        </div>
    </div>
    @include('partials.footer')
</div>
<!-- Tabler Core -->
<script src="{{ mix('js/app.js') }}"></script>

@yield('script')
@stack('javascript-stack')
@endsection
