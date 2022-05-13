@extends('admin.layouts.form.create_edit', [
    'breadcrumbLinks' => Auth::user() && Auth::user()->isAdmin ? ['Korisnici' => route('user.index')] : [],
    'formAction' => route('user.update', ['user' => $model]),
    'formMethod' => 'PATCH',
   // 'enctype' => 'enctype=multipart/form-data'
])

@section('form_title', 'Izmeni Korisnika')
@section('form_title_action', 'Izmeni Postojećeg Korisnika')

@section('form_content')
    @include('admin.user._form')
@endsection
