import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div class="container">
    <div class="row" *ngFor="let food of childFoodList">
      <div class="col-md-6">
        <h5>You Had {{food.item}}, for {{food.meal}}. It Contained {{food.calories}} calories.</h5>
      </div>
      <div class="col-md-3"><button (click)="editFood(food)">Edit</button></div>
    </div>
  </div>
  `

})


export class FoodListComponent
{
  @Input() childFoodList: Food[];
  @Output() editFoodSender = new EventEmitter();

  editFood(foodToEdit: Food)
  {
    this.editFoodSender.emit(foodToEdit);
  }
}
