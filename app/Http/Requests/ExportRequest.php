<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExportRequest extends FormRequest
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
            'date_start' => 'required|date|before_or_equal:date_end',
            'date_end' => 'required|date|before_or_equal:today',
            'rodent_id' => 'required|numeric|exists:rodents,id',
        ];
    }
}
