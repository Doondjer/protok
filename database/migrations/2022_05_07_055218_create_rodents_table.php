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
            $table->float('max_capacity')->nullable();
            $table->string('image')->nullable();
            $table->text('in_short')->nullable();
            $table->timestamps();

            $table->foreign('excavation_field_id')->references('id')->on('excavation_fields')->onDelete('cascade');
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
