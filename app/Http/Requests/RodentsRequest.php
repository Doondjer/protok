<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
        return [
            'rodent_id'         => 'required|numeric|integer|min:0',
            'name'              => 'required|string|max:70',
            'excavation_field'  => 'required|exists:excavation_fields,slug',
            'max_capacity'      => 'nullable|numeric|min:0|max:300000',
            'image'             => 'nullable|string|max:300',
            'in_short'          => 'nullable|string|min:5|max:10000'
        ];
    }
}
