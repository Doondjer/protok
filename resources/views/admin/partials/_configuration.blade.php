<div class="col-md-6">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ trans("app_settings.$section.section:name") }}</h3>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.configuration.update') }}" method="POST">
                @method('PATCH')

                @csrf
                <div class="form-group mb-3 ">
                    <div>
                        <input type="hidden" name="section" class="{{ $errors->has('section') ? 'is-invalid' : '' }}"
                               value="{{ $section }}">
                        @error('section')
                        <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                </div>
                @foreach($settings as $key => $setting)
                    <div class="form-group mb-3 ">
                        <label class="form-label{{ config("app_settings.field_config.$section.$key.required") === true ? ' required': '' }}">{{ $key }}</label>
                        <div>
                            @if(config("app_settings.field_config.$section.$key.type") === 'textarea')

                                <textarea class="form-control{{ $errors->has($key) ? ' is-invalid' : '' }}"
                                          name="{{$key}}" rows="6"
                                          placeholder="{{ $key }}...">{{ old($key, config("app_settings.values.$key")) }}</textarea>
                            @elseif(config("app_settings.field_config.$section.$key.type") === 'checkbox')
                                <label class="form-check{{ $errors->has($key) ? ' is-invalid' : '' }}">
                                    <input type="hidden" value="0" name="{{ $key }}">
                                    <input class="form-check-input" type="checkbox"
                                           {{ old($key, config("app_settings.values.$key")) ? 'checked=""' : ''}} name="{{ $key }}"
                                           value="{{ old($key, config("app_settings.values.$key")) }}">
                                    <span class="form-check-label">{{ $key }}</span>
                                </label>
                            @elseif(config("app_settings.field_config.$section.$key.type") === 'email')

                                <input type="email" class="form-control{{ $errors->has($key) ? ' is-invalid' : '' }}"
                                       name="{{ $key }}" value="{{ old($key, config("app_settings.values.$key")) }}">
                            @elseif(config("app_settings.field_config.$section.$key.type") === 'array')
                                {{--@foreach(config("app_settings.values.$key") as $i => $j)
                                    <input type="text" class="form-control{{ $errors->has($key) ? ' is-invalid' : '' }}"
                                           name="{{ $key }}[]" value="{{ old($key[$i], config("app_settings.values.$key.$i")) }}">
                                @endforeach--}}
                                    <array_text_input :errors="{{ @json_encode(['main' => $errors->get($key), 'array' => $errors->get("$key.*")]) }}" :name="{{ @json_encode($key) }}" :old_values="{{ @json_encode(old($key)) }}" :values="{{ @json_encode(config("app_settings.values.$key")) }}"></array_text_input>
                            @else
                                <input type="text" class="form-control{{ $errors->has($key) ? ' is-invalid' : '' }}"
                                       name="{{ $key }}" value="{{ old($key, config("app_settings.values.$key")) }}">
                            @endif
                            @error($key)
                            <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                            <small class="form-hint">{{ trans("app_settings.$section.$key") }}</small>
                        </div>
                    </div>
                @endforeach
                <div class="form-footer">
                    <button type="submit" class="btn btn-primary">Izmeni</button>
                </div>
            </form>
        </div>
    </div>
</div>
