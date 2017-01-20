import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <div class="container">
    <div class="new-food-form row">
      <div class="col-md-5">
        <form>
          <label for="item">Food:</label>
          <input type="text" placeholder="Avocado on Toast" required #newFoodItem>
          <label for="item">Meal:</label>
          <input type="text" placeholder="Breakfast~Lunch~Snack~Dinner~Dessert" required #newMeal>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5">
        <form>
          <label for="item">Calories:</label>
          <input type="number" placeholder="315" required #newCalories>
          <label for="item">Comments:</label>
          <input type="text" placeholder="Best Breakfast there is!" required #newComment>
          <button type="button" (click)="submitForm(newFoodItem.value, newMeal.value, newCalories.value, newComment.value); foodFormShow()">Add Meal</button>
        </form>
      </div>
    </div>
  </div>
  `
})

export class NewFoodComponent
{
  @Output() newFoodSender = new EventEmitter();
  @Output() formShowSender = new EventEmitter();

  submitForm(foodItem: string, meal: string, calories: number, comments: string)
  {
    var newFood: Food = new Food(foodItem, meal, calories, comments);
    this.newFoodSender.emit(newFood);
  }
  showForm: boolean = true;
  foodFormShow()
  {
    this.showForm = false;
    this.formShowSender.emit(this.showForm);
  }

}
