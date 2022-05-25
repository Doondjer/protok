@extends('errors::minimal')

@section('title', 'Oops… Upravo se desila neka greška')
@section('code', '403')
@section('message', __($exception->getMessage() ?: 'Pristup je zabranjen! Ukoliko ipak mislite da treba da budete ovde obratite se administratorima.'))
