@extends('errors::minimal')

@section('title', 'Oops… Upravo se desila neka greška')
@section('code', $exception->getStatusCode())
@section('message',
'Server nije u mogućnosti da ispuni zahtev.
Pokušajte ponovo kasnije ili se obratite administratoru Vašeg servera.'
)
