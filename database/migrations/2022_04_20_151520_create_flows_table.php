<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flows', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('StationId');
            $table->timestamp('DatumVreme');
            $table->timestamp('Datum_date');
            $table->integer('Datum_minut');
            $table->integer('ValueStatus');
            $table->float('ValueVrednost')->default(0);
            $table->integer('ExtendedStatus');
            $table->text('Remark')->nullable();
            $table->integer('IndexInterval');
            $table->integer('Smena');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flows');
    }
};
