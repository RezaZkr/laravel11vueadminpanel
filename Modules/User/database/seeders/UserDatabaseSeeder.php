<?php

namespace Modules\User\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Modules\User\Models\User;

class UserDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::query()->updateOrCreate([
            'email' => 'reza@zkr.com',
        ], [
            'first_name' => 'Reza',
            'last_name'  => 'Zakeri',
            'password'   => 12345678,//casted to hash
        ]);
    }
}
