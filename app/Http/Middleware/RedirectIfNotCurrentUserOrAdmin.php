<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;

class RedirectIfNotCurrentUserOrAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $user = $request->route()->parameter('user');

        if($user && ($user == Auth::user() || Auth::user()->isAdmin)) {

            return $next($request);
        }

        if ($request->expectsJson()) {
            return response()->json(['message' => 'Unauthorised.'], 403);
        }

        return redirect(RouteServiceProvider::HOME)->withErrors(['error' => trans('main.Nemate_dozvolu_za_ovu_aktivnost')]);
    }
}
