@extends('errors::minimal', [
    'imageUrl' => asset('android-chrome-512x512.png'),
    'disableCode' => true
    ])

@section('title', 'Privremeno nedostupno zbog održavanja')
@section('code', '')
@section('message', 'Servis je trenutno nedostupan zbog održavanja. Izvinjavamo se zbog neprijatnosti, a vraćamo se uskoro!')

@push('javascript-stack')
    <script>
        setInterval(function () {
            location.reload();
        }, 1000 * 60 * 5);
    </script>
@endpush
