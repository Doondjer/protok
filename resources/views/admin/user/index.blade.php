@extends('admin.layouts.form.index', [
    'cardTitle' => 'Korisnici',
    'newItemRoute' => route('user.create'),
    'formAction' => route('user.index'),
    'items' => $users,
    'trashedFilter' => true,
])

@section('table-header')
    <th class="w-1"><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi sve korisnike"></th>
    <th class="w-1">ID <!-- Download SVG icon from http://tabler-icons.io/i/chevron-up -->
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-sm text-dark icon-thick" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 15 12 9 18 15"></polyline></svg>
    </th>
    <th>Korisnik</th>
    <th>Email</th>
    <th>Izmenjen</th>
    <th>Akcija</th>
    <th></th>
@endsection

@section('table-content')
    @foreach($users as $user)
        <tr{{ $user->trashed() ? ' class=bg-red-lt' : '' }}>
            <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Odaberi Korisnika"></td>
            <td><span class="text-muted">{{ $user->id }}</span></td>
            <td class="td-truncate">
                <div class="d-flex py-1 align-items-center">
                    <span class="avatar me-3" style="background-image: url({{ asset(config('imagecache.route') . "/40x40/$user->profile_image") }})"></span>
                    <div class="flex-fill">
                        <div class="text-muted">
                            @if($user->trashed() && ! Auth::user()->can('user-view-deleted'))
                                <span class="text-reset">{{ $user->name }}</span>
                            @else
                                <a href="{{ route('user.edit', ['user' => $user->id]) }}" class="text-reset">{{ $user->name }}</a>
                            @endif
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {{ $user->email }}
            </td>
            <td>
                {{ $user->updated_at }}
            </td>
            <td>
                <div class="btn-list flex-nowrap">
                    @if( ! $user->trashed())
                        <a href="{{ route('user.edit', ['user' => $user->id]) }}" class="btn btn-white">
                            Izmeni
                        </a>
                        <form action="{{ route('user.destroy', ['user' => $user->id]) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-white" type="submit">Obriši</button>
                        </form>
                    @else
                        <form action="{{ route('user.undelete', ['user' => $user->id]) }}" method="POST">
                            @csrf
                            @method('PATCH')
                            <button class="btn btn-white" type="submit">Vrati Korisnika</button>
                        </form>
                    @endif
                </div>
            </td>
        </tr>
    @endforeach
@endsection

