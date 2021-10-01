<?php

namespace Database\Seeders;

use App\Models\blog;
use App\Models\Categry;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
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
        User::factory(10)->create();
        $this->call([
            UserSeeder::class
        ]);

        Categry::factory(30)->create();
        Post::factory(20)->create();
        Tag::factory(50)->create();
        Blog::factory(50)->create();
    }
}
