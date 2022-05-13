<?php

namespace App\Acme\Traits;

use App\Actions\Fortify\PasswordValidationRules;
use App\Models\User;
use Illuminate\Validation\Rule;

trait UserValidationRules
{
    use PasswordValidationRules;

    /**
     * Get the validation rules used to validate user.
     *
     * @return array
     */
    protected function userRules(User $user = null)
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class)->ignore($user?->id, 'id'),
            ],
            'password' => $this->passwordRules($user),
        ];
    }
}
