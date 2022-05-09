<?php

namespace App\Providers;

use App\Http\Resources\RodentCollection;
use App\Models\Configuration;
use App\Models\Rodent;
use Illuminate\Contracts\Cache\Factory;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Factory $cache, Configuration $configuration)
    {
        /**
         * Merge App Configuration with DB Configuration and put in cache
         */
        $configurationCache = $cache->remember('app_settings', 60 * 24, function ()use ($configuration) {

            $rodents = Rodent::with('excavationField')->get()->groupBy('rodent_id');

            $config = config('app_settings');

            if(Schema::hasTable('configuration')) {
                $config['values'] = array_merge(config('app_settings.values'), $configuration->pluck('config_value', 'config_name')->toArray(), ['panel_resources' =>  RodentCollection::collection($rodents)]);
            } else {
                Log::error('Table Settings does not exists! Did you migrate properly?');
            }

            return $config;
        });

        config()->set('app_settings', $configurationCache);
    }
}
