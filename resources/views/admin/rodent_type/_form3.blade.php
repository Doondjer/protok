{{--   Naziv Modela Bagera --}}
@include('admin.partials.form_group', [
    'required' => true,
    'label' => 'Naziv Modela Bagera',
    'tagName' => 'name',
    'placeholder' => 'Unesite Naziv Modela Bagera...',
    'hint' => ''
])

{{--   Slika Bagera --}}
@include('admin.partials.form_group', [
    'required' => false,
    'label' => 'Slika Bagera',
    'tagName' => 'image',
    'placeholder' => 'Unesite Ime Slike Bagera...',
    'hint' => 'U formatu ime_slike.jpg... Slika se mora prethodno prekopirati u public/images/rodents folder.'
])

