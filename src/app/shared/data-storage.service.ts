import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}
    
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();

        return this.http.put(
            'https://cook-book-backend-6660c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
            ,recipes)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        this.http.get<Recipe[]>(
            'https://cook-book-backend-6660c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
            .pipe(map(recipes => {
                //with this pipe we assur that the recpe has always ingredients defined
                //remember map operator from rxjs is not the same as the regular map function!
                return recipes.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []};
                });
            }))
            .subscribe(recipes => {
                this.recipeService.setRecipes(recipes);
            });
    }
}