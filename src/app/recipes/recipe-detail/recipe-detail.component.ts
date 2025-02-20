import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    // No reacciona a los cambios:
    // const id = this.route.snapshot.params['id'];

    this.route.params
      .subscribe(
        (params: Params) => {
          // Plus added because it will be a string and we want to cast it to a number.
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipeById(this.id);
        }
       );
  }

  onToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    // this.router.navigate(['../'], {relativeTo: this.route});
    this.router.navigate(['/recipes']);
  }
}
