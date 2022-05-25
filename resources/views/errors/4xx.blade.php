@extends('errors::minimal')

@section('title', 'Oops… Upravo se desila neka greška')
@section('code', $exception->getStatusCode())
@section('message', __($exception->getMessage() ?: 'Nešto nije u redu. Ukoliko ste u mogućnosti javite nam šta ste radili kada je došlo do ove greške'))


