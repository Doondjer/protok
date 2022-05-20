<?php

namespace App\Http\Controllers;

use App\Http\Requests\RodentAttributeRequest;
use App\Http\Resources\RodentAttributeResource;
use App\Models\RodentAttribute;
use App\Models\RodentType;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RodentAttributesController extends Controller
{

    public function store(RodentType $rodentType, RodentAttributeRequest $request)
    {
        $attribute = $rodentType->rodentAttributes()->create($request->validated());

        return response()->json([
            'data' => new RodentAttributeResource($attribute),
            'message' => 'Uspešno ste dodali tehničku karakteristiku.'

        ], Response::HTTP_OK);
    }

    public function destroy(RodentType $rodentType, RodentAttribute $attribute)
    {

        $isDeleted = $attribute->rodentType == $rodentType ? $attribute->delete() : 0;

        return response()->json([
            'data' => $isDeleted,
            'message' => $isDeleted ? 'Uspešno ste obrisali tehničku karakteristiku.' : 'Tehnička karakteristika nije uspešno obrisana.'

        ], Response::HTTP_OK);
    }
}
