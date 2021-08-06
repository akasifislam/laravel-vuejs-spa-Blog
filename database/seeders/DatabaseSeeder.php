<?php

namespace Database\Seeders;

use App\Models\Categry;
use App\Models\Post;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            UserSeeder::class
        ]);

        Categry::factory(10)->create();
        Post::factory(20)->create();
    }
}
