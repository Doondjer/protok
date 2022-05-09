@extends('layouts.app')

@section('addl-css')

    <style>
        body {
            background-color: rgb(233, 233, 233);
        }
    </style>

@endsection

@section('main-body-content')
    <div class="page page-center">
        @if(isset($errors) && array_diff($errors->getBag('default')->keys(),['email','password']))
            <div class="container-xl">
                <div class="alert alert-important alert-danger alert-dismissible" role="alert">
                    <div class="d-flex">
                        <div>
                            <!-- Download SVG icon from http://tabler-icons.io/i/alert-circle -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon alert-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>                        </div>
                        <div>
                            Ooouups, Izgleda da je došlo do neke greške !!!!
                        </div>
                    </div>
                    <a class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="close"></a>
                </div>
                @foreach($errors->all() as $message)
                    <p class="text-danger">{{ $message }}</p>
                @endforeach
            </div>
        @endif
        <div class="container-tight py-4">
            <form class="card-md" action="/login" method="POST" autocomplete="off">

                {!! csrf_field() !!}


                <div class="text-center mb-4">
                    <img class="mb-4" src="/images/kolubara.png" alt="" width="72" height="72">
                    <h1 class="h3 mb-3 font-weight-normal">Merenje Protoka</h1>
                    <p>Ova aplikacija je razvijena od strane 4Bto Sistema, i bla bla bla nesto nakenjamo</p>
                </div>
                    <div class="mb-3">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" id="email" name="email" value="{{ old('email') }}" autocomplete="off">
                            <label for="floating-input">Email adresa</label>
                            @error('email')
                            <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" id="password" value="" name="password" autocomplete="off">
                            <label for="floating-password">Password</label>
                            @error('password')
                            <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    <div class="mb-2">
                        <label class="form-check">
                            <input type="checkbox" name="remember" checked="checked" class="form-check-input">
                            <span class="form-check-label">Zapamti me na ovom uređaju</span>
                        </label>
                    </div>
                    <div class="form-footer">
                        <button type="submit" class="btn btn-lg btn-primary w-100">Prijavi se</button>
                    </div>
            </form>
            <div class="text-center text-muted mt-3">
                Još nemaš nalog? <a href="#" tabindex="-1">Javi se Slaji</a>
            </div>
        </div>
    </div>

    <!-- Tabler Core -->
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
