<div class="fullscreen-hidden sticky-top">
    <header class="navbar navbar-expand-md navbar-light sticky-top d-print-none">
        <div class="container-xl">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand d-none-navbar-horizontal pe-0 pe-md-3">
                <a href="{{ route('home') }}">
                    <img src="{{ config('app_settings.values.logo_url') }}"
                         alt="{{ config('app_settings.values.app_name') }}" class="navbar-brand-image" width="110"
                         height="32">
                </a>
            </h1>
            <div class="navbar-nav flex-row order-md-last">
                <div class="nav-item d-none d-md-flex me-3">
<!--                    <div class="btn-list">
                        <a href="#" class="btn" title="Prebaci u mod Prezentacije; Prikaz preko celog ekrana">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-maximize" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="16 4 20 4 20 8"></polyline>
                                <line x1="14" y1="10" x2="20" y2="4"></line>
                                <polyline points="8 20 4 20 4 16"></polyline>
                                <line x1="4" y1="20" x2="10" y2="14"></line>
                                <polyline points="16 20 20 20 20 16"></polyline>
                                <line x1="14" y1="14" x2="20" y2="20"></line>
                                <polyline points="8 4 4 4 4 8"></polyline>
                                <line x1="4" y1="4" x2="10" y2="10"></line>
                            </svg>
                            Prosiri Prikaz
                        </a>
                    </div>-->
                </div>
                <div class="d-none d-md-flex">
                 {{--   <a href="#" class="nav-link px-0" title="Prebaci u Tamnu Temu" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Prebaci u Tamnu Temu">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                        </svg>
                    </a>
                    <a href="#" class="nav-link px-0" title="Prebaci u Svetlu Temu" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Prebaci u Svetlu Temu">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                             <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                        </svg>
                    </a>--}}
                </div>
<!--                <div class="d-none d-md-flex">
                    <div class="nav-item dropdown d-none d-md-flex me-3">
                        <a href="#" class="nav-link px-0" data-bs-toggle="dropdown" tabindex="-1"
                           aria-label="Show notifications">
                            &lt;!&ndash; Download SVG icon from http://tabler-icons.io/i/bell &ndash;&gt;
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                 viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                            </svg>
                            <span class="badge bg-red"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Poslednje Informacije</h3>
                                </div>
                                <div class="list-group list-group-flush list-group-hoverable">
                                    &lt;!&ndash;                                        <div class="list-group-item">
                                                                                <div class="row align-items-center">
                                                                                    <div class="col-auto"><span class="status-dot status-dot-animated bg-red d-block"></span></div>
                                                                                    <div class="col text-truncate">
                                                                                        <a href="#" class="text-body d-block">Example 1</a>
                                                                                        <div class="d-block text-muted text-truncate mt-n1">
                                                                                            Change deprecated html tags to text decoration classes (#29604)
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-auto">
                                                                                        <a href="#" class="list-group-item-actions">
                                                                                            &lt;!&ndash; Download SVG icon from http://tabler-icons.io/i/star &ndash;&gt;
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon text-muted" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>&ndash;&gt;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>-->
                <div class="nav-item dropdown">
                    @if(Auth::user())
                        <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
                           aria-label="Open user menu">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32"
                                 preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                                <path fill="none"
                                      d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"/>
                                <path fill="currentColor"
                                      d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"/>
                            </svg>
                            <div class="d-none d-xl-block ps-2">
                                <div>{{ Auth::user()->name }}</div>
                                <div class="mt-1 small text-muted">{{ Auth::user()->isAdmin ? 'Admin' : 'Korisnik' }}</div>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow text-center">

                            <a href="{{ route('user.edit', ['user' => Auth::user()]) }}" class="btn-link p-1 d-block" title="Ovde možete izmeniti svoj profil i nalog">Moj Profil</a>

                            <div class="dropdown-divider"></div>


                            <form action="/logout" class="text-center" method="POST">
                                @csrf
                                <button class="btn-link">Odjavi se</button>
                            </form>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </header>
    @if(Auth::user() && Auth::user()->isAdmin)
        <div class="navbar-expand-md">
            <div class="collapse navbar-collapse" id="navbar-menu">
                <div class="navbar navbar-light">
                    <div class="container-xl">
                        @include('partials.top_menu')
                    </div>
                </div>
            </div>
        </div>
    @endif
</div>
