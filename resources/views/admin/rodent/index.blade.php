@extends('admin.layouts.form.index', [
    'cardTitle' => 'Bageri',
    'newItemRoute' => route('rodent.create'),
    'formAction' => route('rodent.index'),
    'items' => $rodents
])

@section('table-header')
    <th class="w-1"><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi sve Bagere"></th>
    <th class="w-1">ID <!-- Download SVG icon from http://tabler-icons.io/i/chevron-up -->
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-sm text-dark icon-thick" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 15 12 9 18 15"></polyline></svg>
    </th>
    <th>Naziv</th>
    <th>Slug</th>
    <th>Lokacija</th>
    <th></th>
@endsection

@section('table-content')
    @foreach($rodents as $rodent)
        <tr>
            <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi Bager"></td>
            <td><span class="text-muted">{{ $rodent->rodent_id }}</span></td>
            <td class="td-truncate">
                <div class="text-truncate">{{ $rodent->name }}</div>
            </td>
            <td>{{ $rodent->slug }}</td>
            <td>
                <div class="btn-list flex-nowrap">
                    <a href="{{ route('rodent.edit', ['rodent' => $rodent->slug]) }}" class="btn btn-white">
                        Izmeni
                    </a>
                    <form action="{{ route('rodent.destroy', ['rodent' => $rodent->slug]) }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-white" type="submit">Obriši</button>
                    </form>
                </div>
            </td>
        </tr>
    @endforeach
@endsection

