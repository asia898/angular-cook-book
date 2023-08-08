import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    // Separate method to add various ingredients so that we do not emit too many events.
    addIngredients(newIngredients: Ingredient[]) {
        this.ingredients.push(...this.ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}