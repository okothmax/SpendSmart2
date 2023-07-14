<?php

declare(strict_types=1);

bcscale(12);

if (!function_exists('envNonEmpty')) {
    /**
     * @param string $key
     * @param null   $default
     *
     * @return mixed|null
     */
    function envNonEmpty(string $key, $default = null)
    {
        $result = env($key, $default);
        if (is_string($result) && '' === $result) {
            $result = $default;
        }

        return $result;
    }
}

if (!function_exists('stringIsEqual')) {
    /**
     * @param string $left
     * @param string $right
     *
     * @return bool
     */
    function stringIsEqual(string $left, string $right): bool
    {
        return $left === $right;
    }
}

$app = new Illuminate\Foundation\Application(
    realpath(__DIR__ . '/../')
);

/*
|--------------------------------------------------------------------------
| Bind Important Interfaces
|--------------------------------------------------------------------------
|
| Next, we need to bind some important interfaces into the container so
| we will be able to resolve them when needed. The kernels serve the
| incoming requests to this application from both the web and CLI.
|
*/

$app->singleton(
    Illuminate\Contracts\Http\Kernel::class,
    FireflyIII\Http\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    FireflyIII\Console\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    FireflyIII\Exceptions\Handler::class
);

/*
|--------------------------------------------------------------------------
| Return The Application
|--------------------------------------------------------------------------
|
| This script returns the application instance. The instance is given to
| the calling script so we can separate the building of the instances
| from the actual running of the application and sending responses.
|
*/

return $app;
