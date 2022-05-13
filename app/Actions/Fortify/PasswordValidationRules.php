<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Laravel\Fortify\Rules\Password;

trait PasswordValidationRules
{
    /**
     * Get the validation rules used to validate passwords.
     *
     * @param User|null $user
     * @return array
     */
    protected function passwordRules(User $user = null)
    {
        if($user) {
            return [ 'string', 'nullable', new Password ];
        }

        return [ 'required', 'string', new Password ];    }
}
