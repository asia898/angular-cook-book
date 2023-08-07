import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('amountInput', {static: false}) amoutInputRef: ElementRef;
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAdd() {
    const newIngredientAdded = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amoutInputRef.nativeElement.value
    );

    this.shoppingListService.addIngredient(newIngredientAdded);
  }
}
