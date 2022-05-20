<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class RodentType extends Model
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'name',
        'image',
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

    /**
     * Get Rodents associated with the given type
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function rodents() {
        return $this->hasMany(Rodent::class);
    }

    /**
     * Get Attributes associated with given Rodent Type
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function rodentAttributes() {
        return $this->hasMany(RodentAttribute::class);
    }
}
