@if(isset($model) && $model->image)
    <div class="mb-3">
        <label class="form-label">Postavljena Slika</label>
        <div class="row g-2">
            <div class="col-auto">
                <label class="form-imagecheck mb-2 w-100">
                    <span class="form-imagecheck-figure">
                      <img src="{{ asset("/images/rodents/$model->image") }}" alt="SLika Bager {{ $model->name }}" class="form-imagecheck-image">
                    </span>
                </label>

                <form action="{{ route('rodent_type.delete.image', $model) }}" method="POST" enctype=multipart/form-data>
                    {{ csrf_field() }}
                    <input type="hidden" name="_method" value="DELETE">
                    <button class="btn btn-warning w-100" type="submit">Obriši</button>
                </form>
            </div>
        </div>
        <div class="m-3">
        </div>
    </div>
@endif
@if(isset($model))
    <form action="{{ route('rodent_type.upload.image', $model) }}" method="POST" enctype=multipart/form-data>

        {{ csrf_field() }}

        {{--   Upload Slika Proizvoda   --}}
        @include('admin.partials.form_group', [
            'required' => false,
            'disableMultiple' => true,
            'tagType' => 'upload',
            'label' => 'Slika Bagera',
            'tagName' => 'image',
            'hint' => 'Odaberite sliku Bagera koja će biti prikazane na stranici za detalje bagera.',
        ])

        <button type="submit" class="btn btn-success">Pošalji sliku</button>
    </form>
@endif
