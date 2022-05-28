@extends('layouts.main')

@section('body-content')
    <online-list :me='@json(auth()->user()->toArray())'></online-list>
@endsection
