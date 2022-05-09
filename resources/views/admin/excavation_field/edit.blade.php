@extends('admin.layouts.form.create_edit', [
    'breadcrumbLinks' => ['Stranice' => route('excavation-field.index')],
    'formAction' => route('excavation-field.update', ['excavation_field' => $model]),
    'formMethod' => 'PATCH',
])

@section('form_title', 'Izmeni Radnu Jedinicu')
@section('form_title_action', 'Izmeni Postojeću Radnu Jedinicu')

@section('form_content')
    @include('admin.excavation_field._form')
@endsection
