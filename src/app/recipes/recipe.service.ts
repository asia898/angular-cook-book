import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'This is simply a test',
            'https://ichef.bbci.co.uk/news/800/cpsprodpb/12BFA/production/_95249767_gettyimages-114366145.jpg',
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

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        // using slice method prevents from accessing directly to the recipes property. 
        // We just want to get copy
        return this.recipes.slice();
    }

    getRecipeById(index: number): Recipe {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        ingredients.forEach(ingredient => this.slService.addIngredient(ingredient));
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}