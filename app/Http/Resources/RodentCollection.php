<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class RodentCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data){
                return [
                        'id' => $data->rodent_id,
                        'slug' => $data->slug,
                        'name' => $data->name,
                        'excavation_field' => $data->excavationField->name,
                        'image' => asset("/bager/$data->image"),
                        'max_capacity' => $data->max_capacity,
                        'in_short' => $data->in_short,
                ];
            }),
            'links' => [
                'self' => 'link-value',
            ],
        ];    }
}
