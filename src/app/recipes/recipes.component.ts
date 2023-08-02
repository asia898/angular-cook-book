import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // All child component will share the same instance
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  recSelected: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recSelected = recipe;
      }
    );
  }

}
