@extends('layouts.main')

@section('title')@yield('form_title') - {{ config('app_settings.values.app_name') }}@endsection

@section('body-header')

    <div class="container-xl">
        <div class="page-header d-print-none">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        @yield('form_title')
                    </h2>
                </div>
                <!-- Page title actions -->
                <div class="col-12 col-md-auto ms-auto d-print-none">
                    @if(isset($breadcrumbLinks))
                        <ol class="breadcrumb" aria-label="breadcrumbs">
                            <li class="breadcrumb-item"><a href="{{ route('home') }}">Početna</a></li>
                            @foreach($breadcrumbLinks as $name => $link)
                                <li class="breadcrumb-item"><a href="{{ $link }}">{{ $name }}</a></li>
                            @endforeach
                            <li class="breadcrumb-item active" aria-current="page"><a href="#">@yield('form_title')</a></li>
                        </ol>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection

@section('body-content')
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-12">
                @if($cardContent ?? null)
                    @yield('card_content')
                @else
                    <form class="card" action="{{ $formAction }}" method="{{ $formMethod == 'GET' ?: 'POST' }}" {{ $enctype ?? ''}}>

                        @if($formMethod == 'PATCH')
                            @method('PATCH')
                        @endif

                        @csrf
                        <div class="card-header">
                            <h4 class="card-title">@yield('form_title_action')</h4>
                        </div>
                        <div class="card-body" id="accordion_form">

                            @yield('form_content')

                            <div class="form-footer d-grid gap-2">
                                <button type="submit" class="btn btn-green">{{ isset($formMethod) && $formMethod == 'PATCH' ? 'Izmeni' : 'Kreiraj' }}</button>
                            </div>
                        </div>
                    </form>
                @endif
            </div>
        </div>
    </div>
@endsection
