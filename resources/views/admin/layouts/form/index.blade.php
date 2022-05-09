@extends('layouts.main')

@section('title'){{ $cardTitle }} - {{ config('app_settings.values.app_name') }}@endsection

@section('body-header')

    <div class="container-xl">
        <div class="page-header d-print-none">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ $cardTitle }} - Lista
                    </h2>
                </div>
                <!-- Page title actions -->
                <div class="col-12 col-md-auto ms-auto d-print-none">
                    @if(isset($newItemRoute))
                        <div class="btn-list">
                            <a href="{{ $newItemRoute }}" class="btn btn-green d-none d-sm-inline-block">
                                <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                Kreiraj Novo
                            </a>
                        </div>
                    @endif
                    @if(isset($actionButtons) && is_array($actionButtons))
                        <div class="btn-list">
                            @foreach($actionButtons as $button)
                                @unless($button['hide']?? false)
                                    <a href="{{ $button['href'] }}" class="btn{{ array_key_exists('color', $button) ? ' btn-' . $button['color'] : '' }} d-none d-sm-inline-block">
                                        @if(array_key_exists('icon', $button))
                                            {!! $button['icon'] !!}
                                        @endif
                                        {{ $button['title'] }}
                                    </a>
                                @endunless
                            @endforeach
                        </div>
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
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">{{ $cardTitle }}</h3>
                    </div>
                    <div class="card-body border-bottom py-3 container">
                        <form method="GET" action="{{ $formAction }}" class="row">
                            @if($trashedFilter ?? false)
                                <select class="form-select mb-2" name="trashed" onchange="this.form.submit()">
                                    <option value=""{{ request()->query('trashed') === null ? ' selected' : '' }}>Bez Obrisanih Stavki</option>
                                    <option value="with"{{ request()->query('trashed') === 'with' ? ' selected' : '' }}>Sa Obrisanim Stavkama</option>
                                    <option value="only"{{ request()->query('trashed') === 'only' ? ' selected' : '' }}>Samo Obrisane Stavke</option>
                                </select>
                            @endif
                            <div class="text-muted col-auto my-1">
                                Show
                                <div class="mx-2 d-inline-block">
                                    <input type="text" class="form-control" value="{{ $items->perPage() }}" name="per_page" size="3" aria-label="Items per page" onchange="this.form.submit()">
                                </div>
                                entries
                            </div>
                            @if(array_key_exists('query', get_defined_vars()))
                                <div class="ms-auto text-muted col-md-auto d-flex flex-nowrap my-1">
                                    Search:
                                    <div class="ms-2 d-inline-block input-icon">
                                        <input type="text" class="form-control" value="{{ $query }}" name="q" aria-label="Search items" onchange="this.form.submit()">
                                    </div>
                                    <button type="submit" class="btn btn-danger btn-icon" aria-label="Button">
                                        <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg>

                                        <!-- SVG icon code -->
                                    </button>
                                </div>
                            @endif
                        </form>
                    </div>
                    <div class="table-responsive">
                        <table class="table card-table table-vcenter text-nowrap datatable">
                            <thead>
                            <tr>
                                @yield('table-header')
                            </tr>
                            </thead>
                            <tbody>
                                @if($items->total())
                                    @yield('table-content')
                                @else
                                    <tr>
                                        <td colspan="8">


                                            <div class="empty">
                                                <div class="empty-icon"><!-- Download SVG icon from http://tabler-icons.io/i/mood-sad -->
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="9" y1="10" x2="9.01" y2="10"></line><line x1="15" y1="10" x2="15.01" y2="10"></line><path d="M9.5 15.25a3.5 3.5 0 0 1 5 0"></path></svg>
                                                </div>
                                                <p class="empty-title">Nište nije pronađeno!</p>
                                                <p class="empty-subtitle text-muted">
                                                    Pokušaj da prilagodiš pretragu ili filtere za ono što tražiš.
                                                </p>
                                            </div>


                                        </td>
                                    </tr>
                                @endif
                            </tbody>
                        </table>
                    </div>
                    @if($items->total())
                        <div class="card-footer d-flex align-items-center">
                            <p class="m-0 text-muted">Prikazano <span>{{ $items->firstItem() }}</span> do <span>{{ $items->lastItem() }}</span> od <span>{{ $items->total() }}</span> stavki</p>
                            {{ $items->withQueryString()->links('vendor.pagination.default') }}
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
