
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
    'tagName' => 'excavation_field_id',
    'placeholder' => 'Odaberite Polje...',
    'hint' => 'Odaberite Površinski Kop na kojem se bager nalazi',
    'data' => $excavationFields
])
{{--   Tip Bagera   --}}
@include('admin.partials.form_group', [
    'required' => true,
    'tagType' => 'selectbox',
    'label' => 'Model Bagera',
    'tagName' => 'rodent_type_id',
    'placeholder' => 'Odaberite Tip Bagera...',
    'hint' => 'Odaberite Tip Bagera',
    'data' => $rodentTypes
])
