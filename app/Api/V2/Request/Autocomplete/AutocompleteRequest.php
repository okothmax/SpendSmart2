<?php

declare(strict_types=1);

namespace FireflyIII\Api\V2\Request\Autocomplete;

use FireflyIII\Exceptions\FireflyException;
use FireflyIII\Models\AccountType;
use FireflyIII\Models\UserRole;
use FireflyIII\Support\Request\ChecksLogin;
use FireflyIII\Support\Request\ConvertsDataTypes;
use FireflyIII\User;
use FireflyIII\Validation\Administration\ValidatesAdministrationAccess;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

/**
 * Class AutocompleteRequest
 */
class AutocompleteRequest extends FormRequest
{
    use ConvertsDataTypes;
    use ChecksLogin;
    use ValidatesAdministrationAccess;

    /**
     * @return array
     * @throws FireflyException
     */
    public function getData(): array
    {
        $types = $this->convertString('types');
        $array = [];
        if ('' !== $types) {
            $array = explode(',', $types);
        }
        $limit = $this->convertInteger('limit');
        $limit = 0 === $limit ? 10 : $limit;

        // remove 'initial balance' and another from allowed types. its internal
        $array = array_diff($array, [AccountType::INITIAL_BALANCE, AccountType::RECONCILIATION]);
        /** @var User $user */
        $user = auth()->user();

        return [
            'types'             => $array,
            'query'             => $this->convertString('query'),
            'date'              => $this->getCarbonDate('date'),
            'limit'             => $limit,
            'administration_id' => (int)($this->get('administration_id', null) ?? $user->getAdministrationId()),
        ];
    }

    /**
     * @return array
     */
    public function rules(): array
    {
        return [
            'limit' => 'min:0|max:1337',
        ];
    }

    /**
     * Configure the validator instance with special rules for after the basic validation rules.
     *
     * @param Validator $validator
     *
     * @return void
     */
    public function withValidator(Validator $validator): void
    {
        $validator->after(
            function (Validator $validator) {
                // validate if the account can access this administration
                $this->validateAdministration($validator, [UserRole::CHANGE_TRANSACTIONS]);
            }
        );
    }
}
