<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Rodent extends Model
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'rodent_id',
        'name',
    ];
    /**
     * This attribute will be used instead of id to get listing model
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Save translated slug to model
     *
     * @return SlugOptions
     */
    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function excavationField()
    {
        return $this->belongsTo(ExcavationField::class);
    }

    public function excavationFieldAttribute()
    {
        return $this->excavationField->slug;
    }
    /**
     * Get the Rodent type associated with given Rodent
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function rodentType() {
        return $this->belongsTo(RodentType::class);
    }
}
