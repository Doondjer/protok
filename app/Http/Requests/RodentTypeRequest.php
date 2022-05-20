<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RodentTypeRequest extends FormRequest
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
            'name'      => 'required|string|max:70',
            'image'      => 'nullable|sometimes|string|max:70',
        ];
    }
}
