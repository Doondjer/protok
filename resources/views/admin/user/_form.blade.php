
{{--  Ime I Prezime Korisnika   --}}
@include('admin.partials.form_group', [
    'required' => true,
    'label' => 'Ime I Prezime',
    'tagName' => 'name',
    'placeholder' => 'Unesite Puno Ime I Prezime Korisnika...',
    'hint' => 'Puno Ime I Prezime koje će biti prikazano pri pregledu korisnika.',
])

{{--  Email Korisnika   --}}
@include('admin.partials.form_group', [
    'required' => true,
    'label' => 'Email',
    'tagType' => 'email',
    'tagName' => 'email',
    'placeholder' => 'Unesite Email Korisnika...',
    'hint' => 'Email koji će se koristiti za komunikaciju ili za prijavu na aplikaciju.',
])

{{--  Telefon Korisnika   --}}{{--
@include('admin.partials.form_group', [
    'required' => false,
    'label' => 'Telefon',
    'tagType' => 'phone',
    'tagName' => 'phone',
    'placeholder' => 'Unesite Broj Mobilnog Telefona Korisnika...',
    'hint' => 'Broj Mobilnog Telefona koji će se koristiti za komunikaciju ili za prijavu na aplikaciju.',
])--}}

{{--  Lozinka Korisnika   --}}
@include('admin.partials.form_group', [
    'required' => true,
    'label' => 'Lozinka',
    'tagType' => 'password',
    'tagName' => 'password',
    'placeholder' => 'Unesite Lozinku Korisnika...',
    'hint' => 'Lozinka koja će se koristiti za prijavu na aplikaciju.',
])
