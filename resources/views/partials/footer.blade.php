<footer class="footer footer-transparent d-print-none fullscreen-hidden">
    <div class="container-xl">
        <div class="row text-center align-items-center flex-row-reverse">
            <div class="col-lg-auto ms-lg-auto">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">Podržani čitači</li>
                    @foreach(config('browser_support') as $alt => $browser)
                        <li class="list-inline-item">
                            <a href="{{ $browser['url'] }}" class="link-secondary" title="{{ $browser['title'] }}">
                                <img src="{{ asset($browser['image']) }}" alt="{{ $alt }}" height="24" width="24">
                            </a>
                        </li>
                    @endforeach
                </ul>
            </div>
            <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                <ul class="list-inline list-inline-dots mb-0">
                    <li class="list-inline-item1">
                        Razvijeno od strane 4BTO Sistema Polje "C" 2022 - {{ \Carbon\Carbon::now()->year }}
                        <a href="{{ env('APP_URL') }}" class="link-secondary">Merenje Protoka na Bagerima</a>
                    </li>
                    <li class="list-inline-item1">
                        Dozvoljena svaka upotreba u okviru sistema EPS-a
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
