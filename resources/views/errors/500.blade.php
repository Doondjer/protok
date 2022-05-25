@extends('errors::minimal')

@section('title', 'Oops… Upravo se desila neka greška')
@section('code', '500')
@section('message',
'Server nije u mogućnosti da ispuni zahtev zbog unutrašnje greške servera.
Pokušajte ponovo kasnije ili se obratite administratoru Vašeg servera.'
)
