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
        Schema::create('rodents', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->unsignedInteger('rodent_id')->unique();
            $table->string('name');
            $table->unsignedBigInteger('excavation_field_id');
            $table->unsignedBigInteger('rodent_type_id');
            $table->timestamps();

            $table->foreign('excavation_field_id')->references('id')->on('excavation_fields')->onDelete('cascade');
            $table->foreign('rodent_type_id')->references('id')->on('rodent_types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rodents');
    }
};
