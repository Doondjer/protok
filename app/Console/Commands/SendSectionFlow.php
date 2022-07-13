<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Notifications\SectionFlowNotification;
use Illuminate\Console\Command;

class SendSectionFlow extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:section_flow';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $admin = User::WhereNotNull('admin_since')->firstOrFail();

        $admin->notify(new SectionFlowNotification());

        return 0;
    }
}
