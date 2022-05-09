<?php

namespace App\Imports;

use App\Models\Flow;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\ToModel;

class ProtokImport implements ToModel
{

    use Importable, SkipsFailures, SkipsErrors;

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        if ($row[3] != '2019-03-31') {
            if($row[3] != '31-3-2019') {
                return new Flow([
                    'StationId'         => $row[1],
                    'DatumVreme'        => \Carbon\Carbon::createFromFormat('Y-m-d H:i',$row[3] . ' 00:00')->addMinutes($row[4])->format('Y-m-d H:i'),
                    'Datum_date'        => $row[3],
                    'Datum_minut'       => $row[4],
                    'ValueStatus'       => $row[5],
                    'ValueVrednost'     => $row[6],
                    'ExtendedStatus'    => $row[7],
                 //   'Remark'            => $row[8],
                    'IndexInterval'     => $row[9],
                    'Smena'             => $row[10],
                 ]);
            }
        }
        //Log::info(\Carbon\Carbon::createFromFormat('Y-m-d H:i',$row[3] . ' 00:00')->addMinutes($row[4])->format('Y-m-d H:i'));


    }

    public function headingRow(): int
    {
        return 3;
    }

    public function chunkSize(): int
    {
        return 10;
    }
}
