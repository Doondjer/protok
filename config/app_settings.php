<?php

return [
    'values' => [
        'favicon_url' => env('APP_URL') . '/favicon.ico',
        'logo_url' => env('APP_URL') . ':8000/logo.svg',
        'app_name' => env('APP_NAME'),
        'app_email' => env('MAIL_FROM_ADDRESS'),
        'flow_paginate_allowed' => 1000,
        'flow_paginate_default' => 10,
        'multiday_max_days'     => 20,
        'multiday_default_days' => 7,
      /*  'panel_resources' => [ 1 => 'Glodar 1', 2 => 'Glodar 2', 3 => 'Glodar 3', 4 => 'Glodar 4', 5 => 'Glodar 5', 6 => 'Glodar 6', 7 => 'Glodar 7', 8 => 'Glodar 8', 9 => 'Glodar 9' ],
        'panel_column_size' => 2,
        'panel_multiplier' => 0.4,
        'panel_opacity_healthy' => 0.4,
        'panel_opacity_failing' => 1,*/
    ],
    'field_config' => [

        'site' => [
            'favicon_url' => [
                'rules' => 'nullable|active_url',
                'type' => 'text'
            ],
            'logo_url' => [
                'rules' => 'nullable|active_url',
                'type' => 'text'
            ],
            'app_name' => [
                'rules' => 'required|string|max:50',
                'type' => 'text',
                'required' => true,
            ],
            'app_email' => [
                'type' => 'email',
                'rules' => 'required|email',
                'required' => true,
            ],
            'flow_paginate_allowed' => [
                'rules' => 'required|array',
                'array_rules' => 'required|numeric|min:5|max:50',
                'type' => 'array',
                'required' => true,
            ],
            'flow_paginate_default' => [
                'type' => 'text',
                'required' => true,
            ],
        ],
       /* 'panel' => [
            'panel_resources' => [
                'rules' => 'required|array',
                'array_rules' => 'required|string|max:50',
                'type' => 'array',
                'required' => true,
            ],
            'panel_column_size' => [
                'rules' => 'required|integer|max:10',
                'type' => 'text',
                'required' => true,
            ],
            'panel_multiplier' => [
                'rules' => 'required|numeric|max:10',
                'type' => 'text',
                'required' => true,
            ],
            'panel_opacity_healthy' => [
                'rules' => 'required|numeric|max:10',
                'type' => 'text',
                'required' => true,
            ],
            'panel_opacity_failing' => [
                'rules' => 'required|numeric|max:10',
                'type' => 'text',
                'required' => true,
            ],
        ]*/
    ]
];
