@extends('admin.layouts.form.create_edit', [
    'breadcrumbLinks' => ['Radne Jedinice' => route('excavation-field.index')],
    'formAction' => route('excavation-field.store'),
    'formMethod' => 'POST',
])

@section('form_title', 'Kreiraj Radnu Jedinicu')
@section('form_title_action', 'Kreiraj Novu Radnu Jedinicu')

@section('form_content')
    @include('admin.excavation_field._form')
@endsection
