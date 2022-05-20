<?php

namespace Database\Seeders;

use App\Models\ExcavationField;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExcavationFieldSeeder extends Seeder
{
    public $fields = [
        [ 'name' => 'Polje "B"' ],
        [ 'name' => 'Polje "C"' ],
        [ 'name' => 'Polje "D"' ],
        [ 'name' => 'Tamnava Istok'   ],
        [ 'name' => 'Radljevo'  ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        foreach ($this->fields as $field) {

            ExcavationField::create($field);
        }
    }
}
