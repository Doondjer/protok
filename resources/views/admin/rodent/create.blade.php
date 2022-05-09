@extends('admin.layouts.form.create_edit', [
    'breadcrumbLinks' => ['Bageri' => route('rodent.index')],
    'formAction' => route('rodent.store'),
    'formMethod' => 'POST',
])

@section('form_title', 'Kreiraj Bager')
@section('form_title_action', 'Kreiraj Novi Bager')

@section('form_content')
    @include('admin.rodent._form')
@endsection
