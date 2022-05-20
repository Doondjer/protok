<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RodentAttribute extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'value',
        'unit',
    ];

    /**
     * Get the Rodent associated with this attribute
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function rodentType()
    {
        return $this->belongsTo(RodentType::class);
    }
}
