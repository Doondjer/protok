<?php

namespace App\Http\Controllers;

use App\Acme\Traits\UserValidationRules;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class UsersController extends Controller
{
    use UserValidationRules;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public function index()
    {
        $perPage = request()->get('per_page', 10);
        $query = request()->get('q', '');

        $users = User::where('name', 'LIKE', "%{$query}%")
            ->when(request()->get('trashed') === 'with', function($q){
                return $q->withTrashed();
            })
            ->when(request()->get('trashed') === 'only', function($q){
                return $q->onlyTrashed();
            })
            ->paginate($perPage);

        return view('admin.user.index', [
            'users' => $users,
            'query' => $query,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('admin.user.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $validated = $this->prepareUserData($request);

        $user = User::create($validated);

        return redirect()->back()->with('success', "Korisnik $user->email je uspešno kreiran.");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(User $user)
    {

        return view('admin.user.edit', [
            'model' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, User $user)
    {
        if( ! Auth::user()->isAdmin) {

            $user = Auth::user();
        }

        $validated = $this->prepareUserData($request, $user);

        $user->update($validated);

        return redirect()->back()
            ->with('success', "Korisnik $user->name je uspešno izmenjen.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->back()->with('success', "Korisnik $user->email je uspešno obrisan.");
    }

    /**
     * Restore the specified resource from storage.
     *
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function undelete(User $user)
    {
        $user->restore();

        return redirect()->back()->with(['success' => "Korisnik $user->name je uspešno vraćen!"]);
    }

    /**
     * @param Request $request
     * @return array
     */
    public function prepareUserData(Request $request, User $user = null): array
    {
        $validated = $request->validate($this->userRules($user));

        if ($request->get('password')) {
            $validated = array_replace($validated, [
                'password' => Hash::make($request->get('password'))
            ]);
        } else {
            unset($validated['password']);
        }

        return $validated;
    }
}
