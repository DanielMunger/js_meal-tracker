import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div class="container">
    <select class="dropDown" (change)="onChange($event.target.value)">
      <option value="All" selected="selected">All Meals</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snack">Snack</option>
      <option value="Dessert">Dessert</option>
    </select>
    <select class="dropDown" (change)="onChange($event.target.value)">
      <option value="All" selected="selected">All Calorie Levels</option>
      <option value="Low">Low Calorie Meals</option>
      <option value="Average">Average Calorie Meals</option>
      <option value="High">High Calorie Meals</option>
    </select>
    <div class="row" *ngFor="let food of childFoodList | mealtype:filter">
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
  filter= "All";
  onChange(optionFromMenu)
  {
    this.filter = optionFromMenu
  }
}
