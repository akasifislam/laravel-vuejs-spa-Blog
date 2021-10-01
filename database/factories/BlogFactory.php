<?php

namespace Database\Factories;

use App\Models\blog;
use Illuminate\Database\Eloquent\Factories\Factory;

class BlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = blog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'cat_id' => rand(1, 10),
            'user_id' => rand(1, 10),
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'photo' => $this->faker->imageUrl
        ];
    }
}
