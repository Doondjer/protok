{{--@if(app()->isDownForMaintenance())
                    <div class="alert alert-important alert-warning" role="alert">
                        <div class="d-flex">
                            <div class="col d-flex">
                                <div>
                                    <!-- Download SVG icon from http://tabler-icons.io/i/alert-circle -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon alert-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                </div>
                                <div>
                                    !!! Aplikacija je u modu Održavanja {{ \Carbon\Carbon::now()->diffInMinutes(cache()->get('maintenance:mode:data')['maintenance_started'] ?? null) }} minut !!!!
                                </div>
                            </div>
                            <div class="col-auto">
                                <a class="btn btn-white text-dark" href="{{ route('admin.maintenance.up') }}" aria-label="close">Izadji iz moda održavanja</a>
                            </div>
                        </div>
                    </div>
                @endif--}}
@if(session('error'))






{{ session('error') }}




@endif
@if(session('success'))







{{ session('success') }}




@endif
@if(isset($errors) && $errors->any())











@foreach($errors->all() as $message)
{{ $message }}
@endforeach
@endif
