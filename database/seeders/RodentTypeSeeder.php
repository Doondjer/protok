<?php

namespace Database\Seeders;

use App\Models\RodentType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RodentTypeSeeder extends Seeder
{
    public $types = [
        [ 'name' => 'SchRs 350х12/5',   'image' => 'schrs_350.jpg'],
        [ 'name' => 'SchRs 630/6x25',   'image' => 'schrs_630.jpg'],
        [ 'name' => 'SchRs 900/6x25',   'image' => 'schrs_900.jpg'],
        [ 'name' => 'SchRs 1760х32/5',  'image' => 'schrs_1760.jpg'],
        [ 'name' => 'SRs 1200х24/4',    'image' => 'srs_1200_24.jpg'],
        [ 'name' => 'SRs 1200х22/2',    'image' => 'srs_1200_22.jpg'],
        [ 'name' => 'SRs 1300х26/5',    'image' => 'srs_1300.jpg'],
        [ 'name' => 'SRs 2000х32/5',    'image' => 'srs_2000.jpg'],
        [ 'name' => 'C 700s',           'image' => 'c700.jpg'],
    ];

    public $attributes = [
      1 =>  [
                [ 'name' => 'Teoretski kapacitet',          'value' => '1000-1260-510', 'unit' => 'm3/h'],
                [ 'name' => 'Prečnik rotora',               'value' => '8.2', 'unit' => 'm'],
                [ 'name' => 'Broj kašika',                  'value' => '8', 'unit' => 'kom'],
                [ 'name' => 'Zapremina kašike',             'value' => '300', 'unit' => 'l'],
                [ 'name' => 'Broj istresanja kašike',       'value' => '48-60-72', 'unit' => 'min-1'],
                [ 'name' => 'Snaga motora rotora',          'value' => '200', 'unit' => 'kW'],
                [ 'name' => 'Prečnik obrtnog tanjira',      'value' => '2900', 'unit' => 'mm'],
                [ 'name' => 'Br. obrtaja obrtnog tanjira',  'value' => '22', 'unit' => 'm-1'],
                [ 'name' => 'Prečnik kuglibana bagera',     'value' => '3700', 'unit' => 'mm'],
                [ 'name' => 'Noseće kugle 200',             'value' => '44', 'unit' => 'kom'],
                [ 'name' => 'Kavezi u kuglibanu',           'value' => '11', 'unit' => 'kom'],
                [ 'name' => 'Naleganja jedne gusenice',     'value' => '22', 'unit' => 'm2'],
                [ 'name' => 'Širina papuča',                'value' => '2500', 'unit' => 'mm'],
                [ 'name' => 'Dužina papuča',                'value' => '600', 'unit' => 'mm'],
                [ 'name' => 'Brzina kretanja bagera',       'value' => '5', 'unit' => 'm/min'],
                [ 'name' => 'Širina traka',                 'value' => '1400', 'unit' => 'mm'],
                [ 'name' => 'Instalisana snaga',            'value' => '650', 'unit' => 'kW'],
                [ 'name' => 'Jednovremena snaga',           'value' => '455', 'unit' => 'kW'],
                [ 'name' => 'Radna Masa',                   'value' => '493,37', 'unit' => 't'],
                [ 'name' => 'Pritisak па tlo',              'value' => '11,2', 'unit' => 'N/cm2'],
                [ 'name' => 'Nosivost krana',               'value' => '5', 'unit' => 't'],
                [ 'name' => 'Kapacitet kablovskog bubnja',  'value' => '800', 'unit' => 'm'],
            ],
      2 =>  [
                [ 'name' => 'Teoretski kapacitet',          'value' => '4100', 'unit' => 'm3/h'],
                [ 'name' => 'Prečnik rotora',               'value' => '10000', 'unit' => 'mm'],
                [ 'name' => 'Broj kašika',                  'value' => '20', 'unit' => 'kom'],
                [ 'name' => 'Zapremina kašike',             'value' => '630', 'unit' => 'l'],
                [ 'name' => 'Broj istresanja kašike',       'value' => '108-162', 'unit' => 'min-1'],
                [ 'name' => 'Snaga motora rotora',          'value' => '2x375', 'unit' => 'kW'],
                [ 'name' => 'Specificna rezna sila',        'value' => '900', 'unit' => 'N/cm'],
                [ 'name' => 'Prečnik kuglibana bagera',     'value' => '10000', 'unit' => 'mm'],
                [ 'name' => 'Noseće kugle 200',             'value' => '120', 'unit' => 'kom'],
                [ 'name' => 'Broj kaveza za kugle',         'value' => '30', 'unit' => 'kom'],
                [ 'name' => 'Širina papuča',                'value' => '2800', 'unit' => 'mm'],
                [ 'name' => 'Naleganje gusenica',           'value' => '124,7', 'unit' => 'm2'],
                [ 'name' => 'Broj donjih trkača (6x8)',     'value' => '48', 'unit' => 'kom'],
                [ 'name' => 'Prečnik trkača',               'value' => '500', 'unit' => 'mm'],
                [ 'name' => 'Brzina kretanja bagera',       'value' => '8', 'unit' => 'm/min'],
                [ 'name' => 'Širina traka',                 'value' => '1600', 'unit' => 'mm'],
                [ 'name' => 'Instalisana snaga',            'value' => '1860', 'unit' => 'kW'],
                [ 'name' => 'Jednovremena snaga',           'value' => '1300', 'unit' => 'kW'],
                [ 'name' => 'Radna Masa',                   'value' => '1.499.641', 'unit' => 'kg'],
                [ 'name' => 'Pritisak па tlo',              'value' => '12', 'unit' => 'N/cm2'],
                [ 'name' => 'Nosivost derik krana na 6.3m', 'value' => '5', 'unit' => 't'],
                [ 'name' => 'Kapacitet kablovskog bubnja',  'value' => '1500', 'unit' => 'm'],
            ],
      3 =>  [
                [ 'name' => 'Teoretski kapacitet',          'value' => '4100', 'unit' => 'm3/h'],
                [ 'name' => 'Prečnik rotora',               'value' => '10200', 'unit' => 'mm'],
                [ 'name' => 'Broj kašika',                  'value' => '14', 'unit' => 'kom'],
                [ 'name' => 'Zapremina kašike',             'value' => '900', 'unit' => 'l'],
                [ 'name' => 'Broj istresanja kašike',       'value' => '76', 'unit' => 'min-1'],
                [ 'name' => 'Snaga motora rotora',          'value' => '2x230', 'unit' => 'kW'],
                [ 'name' => 'Broj obrtaja rotora',          'value' => '5,42', 'unit' => 'o/min'],
                [ 'name' => 'Specificna rezna sila',        'value' => '900', 'unit' => 'N/cm'],
                [ 'name' => 'Prečnik kuglibana bagera',     'value' => '10000', 'unit' => 'mm'],
                [ 'name' => 'Noseće kugle 200',             'value' => '120', 'unit' => 'kom'],
                [ 'name' => 'Broj kaveza za kugle',         'value' => '30', 'unit' => 'kom'],
                [ 'name' => 'Širina papuča',                'value' => '2800', 'unit' => 'mm'],
                [ 'name' => 'Naleganje gusenica',           'value' => '124,7', 'unit' => 'm2'],
                [ 'name' => 'Broj donjih trkača (6x8)',     'value' => '48', 'unit' => 'kom'],
                [ 'name' => 'Prečnik trkača',               'value' => '500', 'unit' => 'mm'],
                [ 'name' => 'Brzina kretanja bagera',       'value' => '8', 'unit' => 'm/min'],
                [ 'name' => 'Širina traka',                 'value' => '1600', 'unit' => 'mm'],
                [ 'name' => 'Instalisana snaga',            'value' => '1860', 'unit' => 'kW'],
                [ 'name' => 'Jednovremena snaga',           'value' => '1300', 'unit' => 'kW'],
                [ 'name' => 'Radna Masa',                   'value' => '1.499.641', 'unit' => 'kg'],
                [ 'name' => 'Pritisak па tlo',              'value' => '12', 'unit' => 'N/cm2'],
                [ 'name' => 'Nosivost derik krana na 6.3m', 'value' => '5', 'unit' => 't'],
                [ 'name' => 'Kapacitet kablovskog bubnja',  'value' => '1500', 'unit' => 'm'],
            ],
      4 =>  [
                [ 'name' => 'Teoretski kapacitet',          'value' => '6100', 'unit' => 'm3/h'],
                [ 'name' => 'Prečnik rotora',               'value' => '12,25', 'unit' => 'm'],
                [ 'name' => 'Broj kašika',                  'value' => '14', 'unit' => 'kom'],
                [ 'name' => 'Zapremina kašike',             'value' => '1760', 'unit' => 'l'],
                [ 'name' => 'Broj istresanja kašike',       'value' => '58,2', 'unit' => 'min-1'],
                [ 'name' => 'Snaga motora rotora',          'value' => '2x550', 'unit' => 'kW'],
                [ 'name' => 'Specificna rezna sila',        'value' => '1000', 'unit' => 'N/cm'],
                [ 'name' => 'Prečnik kuglibana bagera',     'value' => '10000', 'unit' => 'mm'],
                [ 'name' => 'Noseće kugle 200',             'value' => '123', 'unit' => 'kom'],
                [ 'name' => 'Širina papuče vel. transporta','value' => '3,7', 'unit' => 'm'],
                [ 'name' => 'Br. donjih trkača/gus. vel.trans','value' => '16', 'unit' => 'kom'],
                [ 'name' => 'Brzina kretanja bagera',       'value' => '10', 'unit' => 'm/min'],
                [ 'name' => 'Širina papuče mal. transporta','value' => '3,1', 'unit' => 'm'],
                [ 'name' => 'Br. donjih trkača/gus. mal.trans','value' => '8', 'unit' => 'kom'],
                [ 'name' => 'Širina transportnih traka',    'value' => '2000', 'unit' => 'mm'],
                [ 'name' => 'Instalisana snaga',            'value' => '3500', 'unit' => 'kW'],
                [ 'name' => 'Jednovremena snaga',           'value' => '2450', 'unit' => 'kW'],
                [ 'name' => 'Masa Bagera',                  'value' => '3075', 'unit' => 't'],
                [ 'name' => 'Masa Bagera sa materijalom',   'value' => '3156', 'unit' => 't'],
                [ 'name' => 'Pritisak па tlo glavnog oruđa','value' => '14,5', 'unit' => 'N/cm2'],
                [ 'name' => 'Pritisak па tlo pretovar oruđa','value' => '12,0', 'unit' => 'N/cm2'],
                [ 'name' => 'Kapacitet kablovskog bubnja',  'value' => '1500', 'unit' => 'm'],
            ],
      5 =>  [
                [ 'name' => 'Teoretski kapacitet',          'value' => '3465', 'unit' => 'm3/h'],
                [ 'name' => 'Isturenost strele rotora',     'value' => '36.5', 'unit' => 'm'],
                [ 'name' => 'Visina kopanja',               'value' => '24', 'unit' => 'm'],
                [ 'name' => 'Dubina kopanja',               'value' => '4', 'unit' => 'm'],
                [ 'name' => 'Prečnik rotora',               'value' => '8.2', 'unit' => 'm'],
                [ 'name' => 'Broj kašika',                  'value' => '8', 'unit' => 'kom'],
                [ 'name' => 'Zapremina kašike',             'value' => '1200', 'unit' => 'l'],
                [ 'name' => 'Snaga motora rotora',          'value' => '400', 'unit' => 'kW'],
                [ 'name' => 'Specificna rezna sila',        'value' => '600', 'unit' => 'N/cm'],
                [ 'name' => 'Prečnik kuglibana bagera',     'value' => '8500', 'unit' => 'mm'],
                [ 'name' => 'Nosece kugle 110',             'value' => '203', 'unit' => 'kom'],
                [ 'name' => 'Širina papuče vel. transporta','value' => '2800', 'unit' => 'mm'],
                [ 'name' => 'Brzina kretanja bagera',       'value' => '6', 'unit' => 'm/min'],
                [ 'name' => 'Širina papuče mal. transporta','value' => '2240', 'unit' => 'mm'],
                [ 'name' => 'Širina transportnih traka',    'value' => '1600', 'unit' => 'mm'],
                [ 'name' => 'Instalisana snaga',            'value' => '1810', 'unit' => 'kW'],
                [ 'name' => 'Jednovremena snaga',           'value' => '1267', 'unit' => 'kW'],
                [ 'name' => 'Presek VN kabla',              'value' => '3x120(3x16,7)', 'unit' => 'mm2'],
                [ 'name' => 'Masa bagera',                  'value' => '1528', 'unit' => 't'],
                [ 'name' => 'Pritisak па tlo glavnog oruđa','value' => '10,5', 'unit' => 'N/cm2'],
                [ 'name' => 'Pritisak па tlo pretovar oruđa','value' => '9,6', 'unit' => 'N/cm2'],
                [ 'name' => 'Kapacitet kablovskog bubnja',  'value' => '1200', 'unit' => 'm'],
            ],
      6 =>  [
                [ 'name' => 'Teoretski kapacitet',          'value' => '3465', 'unit' => 'm3/h'],
                [ 'name' => 'Isturenost strele rotora',     'value' => '30.5', 'unit' => 'm'],
                [ 'name' => 'Visina kopanja',               'value' => '22', 'unit' => 'm'],
                [ 'name' => 'Dubina kopanja',               'value' => '2', 'unit' => 'm'],
                [ 'name' => 'Prečnik rotora',               'value' => '8.2', 'unit' => 'm'],
                [ 'name' => 'Broj kašika',                  'value' => '8', 'unit' => 'kom'],
                [ 'name' => 'Zapremina kašike',             'value' => '1200', 'unit' => 'l'],
                [ 'name' => 'Snaga motora rotora',          'value' => '630', 'unit' => 'kW'],
                [ 'name' => 'Specificna rezna sila',        'value' => '1100', 'unit' => 'N/cm'],
                [ 'name' => 'Prečnik kuglibana bagera',     'value' => '8500', 'unit' => 'mm'],
                [ 'name' => 'Nosece kugle 110',             'value' => '203', 'unit' => 'kom'],
                [ 'name' => 'Širina papuče vel. transporta','value' => '2800', 'unit' => 'mm'],
                [ 'name' => 'Brzina kretanja bagera',       'value' => '6', 'unit' => 'm/min'],
                [ 'name' => 'Širina papuče mal. transporta','value' => '2240', 'unit' => 'mm'],
                [ 'name' => 'Širina transportnih traka',    'value' => '1600', 'unit' => 'mm'],
                [ 'name' => 'Instalisana snaga',            'value' => '1810', 'unit' => 'kW'],
                [ 'name' => 'Jednovremena snaga',           'value' => '1267', 'unit' => 'kW'],
                [ 'name' => 'Presek VN kabla',              'value' => '3x120(3x16,7)', 'unit' => 'mm2'],
                [ 'name' => 'Masa bagera',                  'value' => '1423', 'unit' => 't'],
                [ 'name' => 'Pritisak па tlo glavnog oruđa','value' => '10,5', 'unit' => 'N/cm2'],
                [ 'name' => 'Pritisak па tlo pretovar oruđa','value' => '9,6', 'unit' => 'N/cm2'],
                [ 'name' => 'Kapacitet kablovskog bubnja',  'value' => '1200', 'unit' => 'm'],
            ],
      7 =>  [
                [ 'name' => 'Teoretski kapacitet',          'value' => '4500', 'unit' => 'm3/h'],
                [ 'name' => 'Prečnik rotora',               'value' => '9,0', 'unit' => 'm'],
                [ 'name' => 'Broj kašika',                  'value' => '23', 'unit' => 'kom'],
                [ 'name' => 'Zapremina kašike',             'value' => '0,55', 'unit' => 'm3'],
                [ 'name' => 'Snaga motora rotora',          'value' => '900', 'unit' => 'kW'],
                [ 'name' => 'Spec. rez. sila pri 134,4 min-1','value' => '1060', 'unit' => 'N/cm'],
                [ 'name' => 'Spec. rez. sila pri 1164 min-1','value' => '960', 'unit' => 'N/cm'],
                [ 'name' => 'Širina papuče vel. transporta','value' => '2800', 'unit' => 'mm'],
                [ 'name' => 'Br. donjih trkača/gus. vel.trans','value' => '10', 'unit' => 'kom'],
                [ 'name' => 'Brzina kretanja bagera',       'value' => '3-6', 'unit' => 'm/min'],
                [ 'name' => 'Prečnik kuglibana bagera',     'value' => '8500', 'unit' => 'mm'],
                [ 'name' => 'Masa pretovarnog uređaja',     'value' => '668', 'unit' => 't'],
                [ 'name' => 'Brzina kretanja pretovarnog uređaja','value' => '6', 'unit' => 'm/min'],
                [ 'name' => 'Širina papuče mal. transporta','value' => '2800', 'unit' => 'mm'],
                [ 'name' => 'Br. donjih trkača/gus. mal.trans','value' => '10 tj. 12', 'unit' => 'kom'],
                [ 'name' => 'Širina transportnih traka',    'value' => '1800', 'unit' => 'mm'],
                [ 'name' => 'Instalisana snaga',            'value' => '3200', 'unit' => 'kW'],
                [ 'name' => 'Jednovremena snaga',           'value' => '2240', 'unit' => 'kW'],
                [ 'name' => 'Masa bagera',                  'value' => '2303', 'unit' => 't'],
                [ 'name' => 'Pritisak па tlo',              'value' => '2x5', 'unit' => 'N/cm2'],
                [ 'name' => 'Nosivost portalnog krana',     'value' => '12', 'unit' => 't'],
                [ 'name' => 'Kapacitet kablovskog bubnja',  'value' => '800', 'unit' => 'm'],
            ],
      8 =>  [
                [ 'name' => 'Teoretski kapacitet',          'value' => '6600', 'unit' => 'm3/h'],
                [ 'name' => 'Prečnik rotora',               'value' => '12', 'unit' => 'm'],
                [ 'name' => 'Broj kašika',                  'value' => '20', 'unit' => 'kom'],
                [ 'name' => 'Zapremina kašike',             'value' => '1000', 'unit' => 'l'],
                [ 'name' => 'Zapremina prstenastog dela',   'value' => '300', 'unit' => 'l'],
                [ 'name' => 'Broj istresanja kašike',       'value' => '86', 'unit' => 'min-1'],
                [ 'name' => 'Snaga pogona rotora',          'value' => '2x670', 'unit' => 'kW'],
                [ 'name' => 'Specificna rezna sila',        'value' => '1000', 'unit' => 'N/cm'],
                [ 'name' => 'Prečnik kuglibana bagera',     'value' => '10000', 'unit' => 'mm'],
                [ 'name' => 'Brzina kretanja bagera',       'value' => '6', 'unit' => 'm/min'],
                [ 'name' => 'Širina papuče vel. transporta','value' => '3300', 'unit' => 'mm'],
                [ 'name' => 'Br. donjih trkača/gus. vel.trans','value' => '14', 'unit' => 'kom'],
                [ 'name' => 'Moguća visinska razlika vi m tr','value' => '10', 'unit' => 'm'],
                [ 'name' => 'Brzina kretanja pretovarnog uređaja','value' => '6', 'unit' => 'm/min'],
                [ 'name' => 'Širina papuče mal. transporta','value' => '3400', 'unit' => 'mm'],
                [ 'name' => 'Br. donjih trkača/gus. mal.trans','value' => '12', 'unit' => 'kom'],
                [ 'name' => 'Širina transportnih traka',    'value' => '2000', 'unit' => 'mm'],
                [ 'name' => 'Instalisana snaga',            'value' => '4590', 'unit' => 'kW'],
                [ 'name' => 'Jednovremena snaga',           'value' => '3405', 'unit' => 'kW'],
                [ 'name' => 'Masa bagera',                  'value' => '2234', 'unit' => 't'],
                [ 'name' => 'Pritisak па tlo',              'value' => '10,1', 'unit' => 'N/cm2'],
                [ 'name' => 'Nosivost krana',               'value' => '7,5', 'unit' => 't'],
            ],
      9 =>  [
                [ 'name' => 'Teoretski kapacitet',          'value' => '3024', 'unit' => 'm3/h'],
                [ 'name' => 'Prečnik rotora',               'value' => '7,7', 'unit' => 'm'],
                [ 'name' => 'Broj kašika',                  'value' => '12', 'unit' => 'kom'],
                [ 'name' => 'Zapremina kašike',             'value' => '700', 'unit' => 'l'],
                [ 'name' => 'Broj istresanja kašike',       'value' => '72', 'unit' => 'min-1'],
                [ 'name' => 'Snaga pogona rotora',          'value' => '600', 'unit' => 'kW'],
                [ 'name' => 'Specificna rezna sila TGL',    'value' => '1000', 'unit' => 'N/cm'],
                [ 'name' => 'Prečnik kuglibana bagera',     'value' => '5000', 'unit' => 'mm'],
                [ 'name' => 'Ugao zaokretanja bagera',      'value' => '210', 'unit' => 'o'],
                [ 'name' => 'Širina papuče transporta',     'value' => '2500', 'unit' => 'mm'],
                [ 'name' => 'Broj papuča po gusenici',      'value' => '41', 'unit' => 'kom'],
                [ 'name' => 'Br. donjih trkača/gusenici',   'value' => '8', 'unit' => 'kom'],
                [ 'name' => 'Prečnik trkača',               'value' => '550', 'unit' => 'mm'],
                [ 'name' => 'Br. potpornih trkača/gusenici','value' => '2+klizači', 'unit' => 'kom'],
                [ 'name' => 'Prečnik potpornih trkača',     'value' => '400', 'unit' => 'mm'],
                [ 'name' => 'Brzina kretanja bagera',       'value' => '10', 'unit' => 'm/min'],
                [ 'name' => 'Širina transportnih traka',    'value' => '1400', 'unit' => 'mm'],
                [ 'name' => 'Instalisana snaga',            'value' => '1300', 'unit' => 'kW'],
                [ 'name' => 'Jednovremena snaga',           'value' => '780', 'unit' => 'kW'],
                [ 'name' => 'Masa bagera',                  'value' => '539,1', 'unit' => 't'],
                [ 'name' => 'Pritisak па tlo',              'value' => '9,1', 'unit' => 'N/cm2'],
                [ 'name' => 'Kapacitet kablovskog bubnja',  'value' => '500', 'unit' => 'm'],
            ]

    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->types as $type) {

            RodentType::create($type);
        }

        foreach ($this->attributes as $rodentTypeId =>$attribute) {


            $rodentType = RodentType::whereId($rodentTypeId)->firstOrFail();

            $rodentType->rodentAttributes()->createMany($attribute);
        }
    }
}