<ul class="navbar-nav">
    <li class="nav-item">
        <a href="{{ route('home') }}" class="nav-link">
            <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                     stroke-linecap="round" stroke-linejoin="round"><path stroke="none"
                                                                          d="M0 0h24v24H0z"
                                                                          fill="none"></path><polyline
                        points="5 12 3 12 12 3 21 12 19 12"></polyline><path
                        d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path
                        d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                </svg>
            </span>
            <span class="nav-link-title">
                Home
            </span>
        </a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown"
           data-bs-auto-close="outside" role="button" aria-expanded="false">
            <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="icon icon-tabler icon-tabler-settings" width="24" height="24"
                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                     stroke-linecap="round" stroke-linejoin="round">
                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                   <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                   <circle cx="12" cy="12" r="3"></circle>
                </svg>
            </span>
            <span class="nav-link-title">
                Podešavanja
            </span>
        </a>
        <div class="dropdown-menu">
            <div class="dropdown-menu-columns">
                <div class="dropdown-menu-column">
                    <a class="dropdown-item" href="{{ route('excavation-field.index') }}">
                        Kopovi
                    </a>
                    <a class="dropdown-item" href="{{ route('rodent.index') }}">
                        Bageri
                    </a>
                    <a class="dropdown-item" href="{{ route('rodent-type.index') }}">
                        Modeli Bagera
                    </a>
                    @foreach(config('app_settings.field_config') as $section => $config)
                        <a class="dropdown-item{{ request()->getUri() == route('admin.configuration.edit', ['section' => $section]) ? ' active' : '' }}"
                           href="{{ route('admin.configuration.edit', ['section' => $section]) }}">
                            {{ trans("app_settings.$section.section:name") }}
                        </a>
                    @endforeach
                    @if(count(config('app_settings.field_config')) > 1)
                        <a class="dropdown-item{{ request()->route()->getName() == 'admin.configuration.index' ? ' active' : '' }}"
                           href="{{ route('admin.configuration.index') }}">
                            Sva Podešavanja
                        </a>
                    @endif
                </div>
            </div>
        </div>
    </li>
    <li class="nav-item">
        <a href="/admin/websockets" class="nav-link">
            <span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M15.917.021a16.199 16.199 0 0 0-3.969.505C5.708 2.078.755 7.729.12 14.139C-.667 20.202 2.401 26.52 7.645 29.65c5.152 3.224 12.125 3.095 17.167-.296c4.532-2.943 7.349-8.303 7.183-13.715c-.077-5.353-3.083-10.557-7.683-13.307C21.807.785 18.86.009 15.917.02zm-.089 2.26c6.593-.011 13.052 5.088 13.713 11.901c1.261 7.547-5.005 15.219-12.651 15.443c-7.271.724-14.303-5.443-14.511-12.745c-.541-5.911 3.36-11.781 8.932-13.735a12.102 12.102 0 0 1 4.516-.859zm6.792 4.303c-3.584 2.78-7.016 5.744-10.521 8.609c1.604.02 3.219.02 4.828.009c1.88-2.885 3.813-5.733 5.693-8.619zm-7.552 10.203c-1.88 2.891-3.817 5.744-5.699 8.635c3.595-2.776 7.011-5.76 10.537-8.609a390.79 390.79 0 0 0-4.839-.025z"/></svg>
            </span>
            <span class="nav-link-title">
                WebSockets
            </span>
        </a>
    </li>
    <li class="nav-item">
        <a href="{{ route('user.index') }}" class="nav-link">
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                   <circle cx="9" cy="7" r="4"></circle>
                   <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                   <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                </svg>
            </span>
            <span class="nav-link-title">
                Korisnici
            </span>
        </a>
    </li>
    <li class="nav-item">
        <a href="{{ route('phpinfo') }}" class="nav-link">
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-php">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <ellipse cx="12" cy="12" rx="10" ry="9"></ellipse>
                    <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"></path>
                    <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"></path>
                    <path d="M12 7.5l-1 5.5"></path>
                    <path d="M11.6 10h2.4l-.5 3"></path>
                </svg>
            </span>
            <span class="nav-link-title">
                PhpInfo
            </span>
        </a>
    </li>
</ul>
