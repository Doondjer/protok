
{{--   Id Bagera --}}
@include('admin.partials.form_group', [
    'required' => true,
    'label' => 'Id Bagera',
    'tagName' => 'rodent_id',
    'placeholder' => 'Unesite Id Bagera...',
    'hint' => 'Id Bagera pod kojim se zapisuje u SQL Server Bazi',
])
{{--   Naziv Bagera --}}
@include('admin.partials.form_group', [
    'required' => true,
    'label' => 'Naziv Bagera',
    'tagName' => 'name',
    'placeholder' => 'Unesite Naziv Bagera...',
    'hint' => '',
])
{{--   Površinski Kop   --}}
@include('admin.partials.form_group', [
    'required' => true,
    'tagType' => 'selectbox',
    'label' => 'Radna Jedinica',
    'tagName' => 'excavation_field',
    'placeholder' => 'Odaberite Polje...',
    'hint' => 'Odaberite Površinski Kop na kojem se bager nalazi',
    'data' => $excavationFields
])
{{--   Teorijski Kapacitet Bagera --}}
@include('admin.partials.form_group', [
    'required' => false,
    'label' => 'Max Kapacitet',
    'tagName' => 'max_capacity',
    'placeholder' => 'Unesite Kapacitet Bagera...',
    'hint' => 'Unesite Teorijski Kapacitet Bagera',
])
{{--   Slika Bagera --}}
@include('admin.partials.form_group', [
    'required' => false,
    'label' => 'Slika Bagera',
    'tagName' => 'image',
    'placeholder' => 'Unesite ime slike Bagera...',
    'hint' => 'Unesite {ime.extenzija} slike Bagera koju ste uploadovali u public/rodents folder',
])
{{--   Ukratko o Bageru   --}}
@include('admin.partials.form_group', [
    'tagType' => 'textarea',
    'required' => false,
    'label' => 'Ukratko o Bageru',
    'tagName' => 'in_short',
    'placeholder' => 'Unesite kratak tekst o Bageru...',
    'hint' => 'Kratak tekst opis ili tekst o Bageru...',
])
