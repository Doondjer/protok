<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flow extends Model
{
    use HasFactory;


    protected $connection = 'sqlsrv';

   // protected $appends = ['total_flow'];

    protected $casts = [
        'DatumVreme' => 'datetime'
    ];

    protected $guarded = [];

    protected $table = 'Vrednosti';


    public function getTotalFlowAttribute()
    {
        return round($this->attributes['total_flow'], 1);
    }
    public function getShiftFlowAttribute()
    {
        return round($this->attributes['shift_flow'], 1);
    }

}
