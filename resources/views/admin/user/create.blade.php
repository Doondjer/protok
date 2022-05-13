@extends('admin.layouts.form.create_edit', [
    'breadcrumbLinks' => ['Korisnici' => route('user.index')],
    'formAction' => route('user.store'),
    'formMethod' => 'POST',
   // 'enctype' => 'enctype=multipart/form-data'
])

@section('form_title', 'Kreiraj Korisnika')
@section('form_title_action', 'Kreiraj Novog Korisnika')

@section('form_content')
    @include('admin.user._form')
@endsection
