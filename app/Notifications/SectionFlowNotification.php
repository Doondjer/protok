<?php

namespace App\Notifications;

use App\Acme\Repositories\FlowRepository;
use App\Http\Resources\RodentResource;
use App\Models\Rodent;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use TelegramNotifications\Messages\TelegramCollection;
use TelegramNotifications\TelegramChannel;
use TelegramNotifications\Messages\TelegramMessage;

class SectionFlowNotification extends Notification
{
    use Queueable;

    protected $flowRepository;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->flowRepository = new FlowRepository();
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [TelegramChannel::class];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     */
    public function toTelegram()
    {
        $rodents = Rodent::pluck('name', 'id');

        $flows = $this->flowRepository->getPanelGraphData();

        $telegrams = [new TelegramMessage([
            'text' => "<b>Presek Za Bagere na dan " . Carbon::now()->format('d M Y') .
                "\t</b>\n <b><span class='tg-spoiler'>Za Potrebe EPS-a Izradio 4bto Sistem</span></b>\n" .
                "Više na http://protoci.eps.local",
            'parse_mode' => 'HTML'
        ])];

        foreach ($rodents as $rodentId => $rodent) {
            $content = "\t<code>Nema Podataka!!!</code>";

            if($flows->has($rodentId)) {
                $content = "<code>";
                foreach ($flows[$rodentId] as $shift) {
                    $content .= "\t $shift->shift Smena: <strong>$shift->shift_flow</strong> m3\n";
                }
                $content .= "</code>";
            }
            $telegrams[] = new TelegramMessage([
                'text' => "<b>$rodent: </b>\n $content",
                'parse_mode' => 'HTML'
            ]);
        }

        return (new TelegramCollection($telegrams));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
