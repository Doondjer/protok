@extends('layouts.app')

@section('main-body-content')
    <div class="border-top-wide border-primary d-flex flex-column theme-dark">
        <div class="page page-center">
            <div class="container-tight py-4">
                <div class="empty">
                    @if(isset($imageUrl))
                        <div class="empty-img">
                            <img src="{{ $imageUrl }}" alt="" height="128">
                        </div>
                    @endif
                    @if(isset($disableCode))
                        <div class="empty-header">
                            @yield('code')
                        </div>
                    @endif
                    <p class="empty-title">
                        @yield('title')
                    </p>
                    <p class="empty-subtitle text-muted">
                        @yield('message')
                    </p>
                    <div class="empty-action">
                        <a href="./." class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <line x1="5" y1="12" x2="11" y2="18"></line>
                                <line x1="5" y1="12" x2="11" y2="6"></line>
                            </svg>
                            Nazad na Početnu
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
