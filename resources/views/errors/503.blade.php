@extends('errors::minimal', [
    'imageUrl' => asset('android-chrome-512x512.png'),
    'disableCode' => true
    ])

@section('title', 'Privremeno nedostupno zbog održavanja')
@section('code', '')
@section('message', 'Servis je trenutno nedostupan zbog održavanja. Izvinjavamo se zbog neprijatnosti, a vraćamo se uskoro!')
