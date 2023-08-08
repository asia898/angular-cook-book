import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'This is simply a test',
            'https://realfood.tesco.com/media/images/Paella1400x919--921069c0-e3c1-46c2-a7fb-da21bf7bcd44-0-1400x919.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
            ),
        new Recipe(
            'Paella',
            'This is simply a test',
            'https://realfood.tesco.com/media/images/Paella1400x919--921069c0-e3c1-46c2-a7fb-da21bf7bcd44-0-1400x919.jpg',
            [
                new Ingredient('Rice', 1),
                new Ingredient('Sea Food', 15),
                new Ingredient('Checken wings', 4),
                new Ingredient('Garlic', 3),
            ]
            )
      ];

    getRecipes() {
        // using slice method prevents from accessing directly to the recipes property. 
        // We just want to get copy
        return this.recipes.slice();
    }
}