<?php

namespace Database\Seeders;

use App\Models\Rodent;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RodentSeeder extends Seeder
{

    public $rodents = [
        [ 'rodent_id' => 1, 'name' => 'Glodar 1',   'excavation_field_id' => 1, 'rodent_type_id' => 5 ],
        [ 'rodent_id' => 2, 'name' => 'Glodar 2',   'excavation_field_id' => 3, 'rodent_type_id' => 5 ],
        [ 'rodent_id' => 3, 'name' => 'Glodar 3',   'excavation_field_id' => 3, 'rodent_type_id' => 5 ],
        [ 'rodent_id' => 4, 'name' => 'Glodar 4',   'excavation_field_id' => 4, 'rodent_type_id' => 5 ],
        [ 'rodent_id' => 5, 'name' => 'Glodar 5',   'excavation_field_id' => 1, 'rodent_type_id' => 5 ],
        [ 'rodent_id' => 6, 'name' => 'Glodar 6',   'excavation_field_id' => 1, 'rodent_type_id' => 5 ],
        [ 'rodent_id' => 7, 'name' => 'Glodar 7',   'excavation_field_id' => 1, 'rodent_type_id' => 2 ],
        [ 'rodent_id' => 8, 'name' => 'Glodar 8',   'excavation_field_id' => 3, 'rodent_type_id' => 7 ],
        [ 'rodent_id' => 9, 'name' => 'Glodar 9',   'excavation_field_id' => 3, 'rodent_type_id' => 4 ],
        [ 'rodent_id' => 10,'name' => 'Glodar 10',  'excavation_field_id' => 5, 'rodent_type_id' => 5 ],
        [ 'rodent_id' => 11,'name' => 'C700s',      'excavation_field_id' => 1, 'rodent_type_id' => 9 ],
        [ 'rodent_id' => 12,'name' => 'Glodar 12',  'excavation_field_id' => 1, 'rodent_type_id' => 5 ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->rodents as $rodent) {

            Rodent::create($rodent);
        }
    }
}
