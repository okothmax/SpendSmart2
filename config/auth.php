<?php

declare(strict_types=1);

if ('ldap' === strtolower((string)env('AUTHENTICATION_GUARD'))) {
    die('LDAP is no longer supported by Firefly III v5.7+. Sorry about that. You will have to switch to "remote_user_guard", and use tools like Authelia or Keycloak to use LDAP together with Firefly III.');
}

return [

    'defaults'     => [
        'guard'     => envNonEmpty('AUTHENTICATION_GUARD', 'web'),
        'passwords' => 'users',
    ],
    'guard_header' => envNonEmpty('AUTHENTICATION_GUARD_HEADER', 'REMOTE_USER'),
    'guard_email'  => envNonEmpty('AUTHENTICATION_GUARD_EMAIL', null),
    'guards' => [
        'web'               => [
            'driver'   => 'session',
            'provider' => 'users',
        ],
        'remote_user_guard' => [
            'driver'   => 'remote_user_guard',
            'provider' => 'remote_user_provider',
        ],
        'api'               => [
            'driver'   => 'passport',
            'provider' => 'users',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | User Providers
    |--------------------------------------------------------------------------
    |
    | All authentication drivers have a user provider. This defines how the
    | users are actually retrieved out of your database or other storage
    | mechanisms used by this application to persist your user's data.
    |
    | If you have multiple user tables or models you may configure multiple
    | sources which represent each model / table. These sources may then
    | be assigned to any extra authentication guards you have defined.
    |
    | Supported: "database", "eloquent"
    |
    */

    'providers' => [
        'users'                => [
            'driver' => 'eloquent',
            'model'  => FireflyIII\User::class,
        ],
        'remote_user_provider' => [
            'driver' => 'remote_user_provider',
            'model'  => FireflyIII\User::class,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Resetting Passwords
    |--------------------------------------------------------------------------
    |
    | You may specify multiple password reset configurations if you have more
    | than one user table or model in the application and you want to have
    | separate password reset settings based on the specific user types.
    |
    | The expire time is the number of minutes that the reset token should be
    | considered valid. This security feature keeps tokens short-lived so
    | they have less time to be guessed. You may change this as needed.
    |
    */

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table'    => 'password_resets',
            'expire'   => 60,
            'throttle' => 300, // Allows a user to request 1 token per 300 seconds
        ],
    ],
    /*
    |--------------------------------------------------------------------------
    | Password Confirmation Timeout
    |--------------------------------------------------------------------------
    |
    | Here you may define the amount of seconds before a password confirmation
    | times out and the user is prompted to re-enter their password via the
    | confirmation screen. By default, the timeout lasts for three hours.
    |
    */

    'password_timeout' => 10800,

];
