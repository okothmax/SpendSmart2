<?php


declare(strict_types=1);

namespace FireflyIII\Api\V2\Response\Sum;

use Closure;
use FireflyIII\Exceptions\FireflyException;
use FireflyIII\Models\TransactionCurrency;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

/**
 * Class AutoSum
 *
 * @deprecated
 */
class AutoSum
{
    /**
     * @param Collection $objects
     * @param Closure    $getCurrency
     * @param Closure    $getSum
     *
     * @return array
     * @throws FireflyException
     */
    public function autoSum(Collection $objects, Closure $getCurrency, Closure $getSum): array
    {
        $return = [];
        /** @var Model $object */
        foreach ($objects as $object) {
            /** @var TransactionCurrency $currency */
            $currency = $getCurrency($object);
            /** @var string $amount */
            $amount = $getSum($object);

            $return[$currency->id] = $return[$currency->id] ?? [
                'id'             => (string)$currency->id,
                'name'           => $currency->name,
                'symbol'         => $currency->symbol,
                'code'           => $currency->code,
                'decimal_places' => $currency->decimal_places,
                'sum'            => '0',
            ];

            $return[$currency->id]['sum'] = bcadd($return[$currency->id]['sum'], $amount);
        }

        var_dump(array_values($return));
        throw new FireflyException('Not implemented');
    }
}
