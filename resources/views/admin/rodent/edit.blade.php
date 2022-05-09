@extends('admin.layouts.form.create_edit', [
    'breadcrumbLinks' => ['Bageri' => route('rodent.index')],
    'formAction' => route('rodent.update', ['rodent' => $model]),
    'formMethod' => 'PATCH',
])

@section('form_title', 'Izmeni Bager - ' . $model->name)
@section('form_title_action', 'Izmeni Postojeći Bager')

@section('form_content')
    @include('admin.rodent._form')
@endsection
