@extends('admin.layouts.form.index', [
    'cardTitle' => 'Radne Jedinice',
    'newItemRoute' => route('excavation-field.create'),
    'formAction' => route('excavation-field.index'),
    'items' => $fields
])

@section('table-header')
    <th class="w-1"><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi sve Radne Jedinice"></th>
    <th>Slug</th>
    <th>Naziv</th>
    <th></th>
@endsection

@section('table-content')
    @foreach($fields as $field)
        <tr>
            <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi Radnu Jedinicu"></td>
            <td>{{ $field->slug }}</td>
            <td class="td-truncate">
                <div class="text-truncate">{{ $field->name }}</div>
            </td>
            <td>
                <div class="btn-list flex-nowrap">
                    <a href="{{ route('excavation-field.edit', ['excavation_field' => $field->slug]) }}" class="btn btn-white">
                        Izmeni
                    </a>
                    <form action="{{ route('excavation-field.destroy', ['excavation_field' => $field->slug]) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-white" type="submit">Obriši</button>
                    </form>
                </div>
            </td>
        </tr>
    @endforeach
@endsection

