@extends('admin.layouts.form.index', [
    'cardTitle' => 'Modeli Bagera',
    'newItemRoute' => route('rodent-type.create'),
    'formAction' => route('rodent-type.index'),
    'items' => $rodentTypes
])

@section('table-header')
    <th class="w-1"><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi sve Modele Bagera"></th>
    <th>ID</th>
    <th>Naziv</th>
    <th></th>
@endsection

@section('table-content')
    @foreach($rodentTypes as $type)
        <tr>
            <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi Model Bagera"></td>
            <td>{{ $type->id }}</td>
            <td class="td-truncate">
                <div class="text-truncate">{{ $type->name }}</div>
            </td>
            <td>
                <div class="btn-list flex-nowrap">
                    <a href="{{ route('rodent-type.edit', ['rodent_type' => $type->slug]) }}" class="btn btn-white">
                        Izmeni
                    </a>
                    <form action="{{ route('rodent-type.destroy', ['rodent_type' => $type->slug]) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-white" type="submit">Obriši</button>
                    </form>
                </div>
            </td>
        </tr>
    @endforeach
@endsection

