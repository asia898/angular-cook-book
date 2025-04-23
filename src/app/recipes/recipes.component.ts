import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // All child component will share the same instance
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
  }

}
