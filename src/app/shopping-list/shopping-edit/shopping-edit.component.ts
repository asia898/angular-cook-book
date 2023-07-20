import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('amountInput', {static: false}) amoutInputRef: ElementRef;
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  onAdd() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amoutInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.newIngredientAdded.emit(newIngredient);
  }
}
