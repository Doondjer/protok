<?php

namespace App\Http\Controllers;

use App\Http\Requests\RodentsRequest;
use App\Models\ExcavationField;
use App\Models\Rodent;
use App\Models\RodentType;
use Symfony\Component\HttpFoundation\Response;

class RodentsController extends Controller
{
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

        $rodents = Rodent::where('name', 'LIKE', "%{$query}%")
            ->orWhere('rodent_id', 'LIKE', "%{$query}%")
            ->paginate($perPage);

        return view('admin.rodent.index', compact('rodents', 'query'));
    }

    /**
     * Show the specified resource in json
     *
     * @param Rodent $rodent
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Rodent $rodent)
    {
        return response()->json([

            'rodent_id'             => $rodent->rodent_id,
            'name'                  => $rodent->name,
            'excavation_field'      => $rodent->excavationField()->name,
            'excavation_field_slug' => $rodent->excavationField()->slug,
            'more_info'             => $rodent->rodentType,

        ], Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        $excavationFields = ExcavationField::pluck('name','id');
        $rodentTypes      = RodentType::pluck('name','id');

        return view('admin.rodent.create', compact('excavationFields', 'rodentTypes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param RodentsRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(RodentsRequest $request)
    {
        $rodent = new Rodent($request->validated());
        $rodent->excavation_field_id = $request->get('excavation_field_id');
        $rodent->rodent_type_id = $request->get('rodent_type_id');
        $rodent->save();

        return redirect()->route('rodent.index')->with('success', "Bager '$rodent->name' je uspešno kreiran.");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Rodent $rodent
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(Rodent $rodent)
    {
        $excavationFields = ExcavationField::pluck('name','id');
        $rodentTypes      = RodentType::pluck('name','id');

        return view('admin.rodent.edit', [
            'model' => $rodent,
            'excavationFields' => $excavationFields,
            'rodentTypes' => $rodentTypes
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Rodent $rodent
     * @param RodentsRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Rodent $rodent, RodentsRequest $request)
    {
        $rodent->excavationField()->associate($request->get('excavation_field_id'));
        $rodent->rodentType()->associate($request->get('rodent_type_id'));

        $rodent->update($request->validated());

        return redirect()->route('rodent.index')->with('success', "Bager '$rodent->name' je uspešno izmenjen.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Rodent $rodent
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Rodent $rodent)
    {
        $rodent->delete();

        return redirect()->back()->with('success', 'Bager je uspešno obrisan!');
    }
}
