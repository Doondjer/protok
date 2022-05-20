<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RodentTypeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'type' => $this->name,
            'image' => $this->image ? asset("images/rodents/$this->image") : null,
            'attributes' => RodentAttributeResource::collection($this->whenLoaded('rodentAttributes'))
        ];
    }
}
