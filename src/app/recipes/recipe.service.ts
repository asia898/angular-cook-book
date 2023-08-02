import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://realfood.tesco.com/media/images/Paella1400x919--921069c0-e3c1-46c2-a7fb-da21bf7bcd44-0-1400x919.jpg'),
        new Recipe('Paella', 'This is simply a test', 'https://realfood.tesco.com/media/images/Paella1400x919--921069c0-e3c1-46c2-a7fb-da21bf7bcd44-0-1400x919.jpg')
      ];

    getRecipes() {
        // using slice method prevents from accessing directly to the recipes property. 
        // We just want to get copy
        return this.recipes.slice();
    }
}