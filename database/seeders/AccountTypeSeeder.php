<?php

declare(strict_types=1);

namespace Database\Seeders;

use FireflyIII\Models\AccountType;
use Illuminate\Database\Seeder;
use PDOException;

/**
 * Class AccountTypeSeeder.
 */
class AccountTypeSeeder extends Seeder
{
    public function run(): void
    {
        $types = [
            AccountType::DEFAULT,
            AccountType::CASH,
            AccountType::ASSET,
            AccountType::EXPENSE,
            AccountType::REVENUE,
            AccountType::INITIAL_BALANCE,
            AccountType::BENEFICIARY,
            AccountType::IMPORT,
            AccountType::LOAN,
            AccountType::RECONCILIATION,
            AccountType::DEBT,
            AccountType::MORTGAGE,
            AccountType::LIABILITY_CREDIT,
        ];
        foreach ($types as $type) {
            try {
                AccountType::create(['type' => $type]);
            } catch (PDOException $e) {
                // @ignoreException
            }
        }
    }
}
