<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('panel', function ($user, $id) {
    return $user;
});

Broadcast::channel('current_data', function ($user, $id) {
    return $user;
});

Broadcast::channel('online', function ($user) {

    if (auth()->check()) {
        return [
            'name' => $user->name,
            'is_admin' => $user->isAdmin,
            'email' => $user->email,
            'since' => \Carbon\Carbon::now()->format('d M, H:m'),
            'agent' => request()->header('User-Agent')
        ];
    }
});
