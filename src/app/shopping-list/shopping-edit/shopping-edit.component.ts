import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('amountInput', {static: true}) newAmount: ElementRef;

  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  onAdd(nameInput:HTMLInputElement) {
    this.newIngredientAdded.emit(new Ingredient(nameInput.value, this.newAmount.nativeElement.value));
    console.log('Added pressed name: ' + nameInput.value + ' amount: ' + this.newAmount.nativeElement.value);

  }
}
