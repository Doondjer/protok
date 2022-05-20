<?php

namespace App\Console\Commands;

use App\Acme\Repositories\FlowRepository;
use App\Events\NewFlow;
use Illuminate\Console\Command;

class SendFlow extends Command
{
    private $flowRepository;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:panel';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public function __construct()
    {
        parent::__construct();
        $this->flowRepository = new FlowRepository();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $panelFlows = $this->flowRepository->getPanelData();

        $graphData = $this->flowRepository->getPanelGraphData();

        $currentFlows = $this->flowRepository->getCurrentFlowData();

        NewFlow::dispatch(compact(
                'panelFlows',
                'graphData',
                'currentFlows',
            )
        );
    }
}
