@extends('admin.layouts.form.create_edit', [
    'breadcrumbLinks' => ['Modeli Bagera' => route('rodent-type.index')],
    'formAction' => route('rodent-type.update', ['rodent_type' => $model]),
    'formMethod' => 'PATCH',
    'enctype' => 'enctype=multipart/form-data'
])

@section('form_title', 'Izmeni Model Bagera')
@section('form_title_action', 'Izmeni Postojeći Model Bagera')

@section('form_content')
    @include('admin.rodent_type._form')
@endsection

@section('after_form_content')

    <div class="card">
        <div class="card-footer">
            @include('admin.rodent_type._image_form')
        </div>
    </div>

    <div class="card">
        <div class="card-footer">
            <div class="form-group mb-3 ">
                <label class="form-label">Tehnički podaci</label>
                <div>
                    <rodent-attributes :rodent_type="{{ isset($model) ? @json_encode($model->slug) : @json_encode(null) }}" :rodent_attributes="{{ @json_encode($rodentAttributes) }}"></rodent-attributes>
                </div>
            </div>
        </div>
    </div>

@endsection
