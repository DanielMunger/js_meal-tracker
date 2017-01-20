import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template:  `
    <div *ngIf="childSelectedFood" class="container">
      <h2>Edit Food Entry</h2>
      <div class="row">
        <div class="col-md-5">
          <label>Food Item:</label>
          <input [(ngModel)]="childSelectedFood.item">
          <label>Meal:</label>
          <input [(ngModel)]="childSelectedFood.meal">
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <label>Calories:</label>
          <input [(ngModel)]="childSelectedFood.calories">
          <label>Comments:</label>
          <input [(ngModel)]="childSelectedFood.comments">
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>    
    </div>

  `

})

export class EditFoodComponent
{
  @Input() childSelectedFood: Food;
  @Output() doneEditingSender = new EventEmitter();
  doneButtonClicked()
  {
    this.doneEditingSender.emit();
  }
}
