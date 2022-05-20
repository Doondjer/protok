<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RodentsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $unique = Rule::unique('rodents');

        if($rodent = $this->route('rodent')) {
            $unique->ignore($rodent->id);
        }

        return [
            'rodent_id'             => ['required', $unique, 'numeric','integer','min:0'],
            'name'                  => 'required|string|max:70',
            'excavation_field_id'   => 'required|exists:excavation_fields,id',
            'rodent_type_id'        => 'required|exists:rodent_types,id',
        ];
    }
}
