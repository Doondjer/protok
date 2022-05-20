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
        Schema::create('rodent_types', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->string('image')->nullable();
            $table->timestamps();
        });

        Schema::create('rodent_attributes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('value');
            $table->string('unit');
            $table->unsignedBigInteger('rodent_type_id');
            $table->timestamps();

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
        Schema::dropIfExists('rodent_attributes');
        Schema::dropIfExists('rodent_types');
    }
};
