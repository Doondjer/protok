<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExcavationFieldsRequest;
use App\Models\ExcavationField;
use App\Models\Rodent;
use Symfony\Component\HttpFoundation\Response;

class ExcavationFieldsController extends Controller
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

        $fields = ExcavationField::where('name', 'LIKE', "%{$query}%")
            ->orWhere('slug', 'LIKE', "%{$query}%")
            ->paginate($perPage);

        return view('admin.excavation_field.index', compact('fields', 'query'));
    }

    /**
     * Show the specified resource in json
     *
     * @param ExcavationField $excavationField
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(ExcavationField $excavationField)
    {
        return response()->json([
            'slug'  => $excavationField->slug,
            'name'  => $excavationField->name,

        ], Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('admin.excavation_field.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ExcavationFieldsRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ExcavationFieldsRequest $request)
    {
        $excavationField = ExcavationField::create($request->validated());

        return redirect()->route('excavation-field.index')->with('success', "Radna jedinica '$excavationField->name' je uspešno kreirana.");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param ExcavationField $excavationField
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(ExcavationField $excavationField)
    {
        return view('admin.excavation_field.edit', ['model' => $excavationField]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ExcavationField $excavationField
     * @param ExcavationFieldsRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ExcavationField $excavationField, ExcavationFieldsRequest $request)
    {
        $excavationField->update($request->validated());

        return redirect()->route('excavation-field.index')->with('success', "Radna jedinica '$excavationField->name' je uspešno izmenjena.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param ExcavationField $excavationField
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(ExcavationField $excavationField)
    {
        $excavationField->delete();

        return redirect()->back()->with('success', 'Radna jedinica je uspešno obrisana!');
    }
}
