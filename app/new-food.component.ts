import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <div class="new-food-form">
      <form>
        <label for="item">Food:</label>
        <input type="text" placeholder="Avocado on Toast" required #newFoodItem>
        <label for="item">Meal:</label>
        <input type="text" placeholder="Breakfast~Lunch~Snack~Dinner~Dessert" required #newMeal>
        <label for="item">Calories:</label>
        <input type="number" placeholder="315" required #newCalories>
        <label for="item">Comments:</label>
        <input type="text" placeholder="Best Breakfast there is!" required #newComment>
        <button type="button" (click)="submitForm(newFoodItem.value, newMeal.value, newCalories.value, newComment.value)">Add Meal</button>
      </form>
    </div>
  `
})

export class NewFoodComponent
{
  @Output() newFoodSender = new EventEmitter();
  submitForm(foodItem: string, meal: string, calories: number, comments: string)
  {
    var newFood: Food = new Food(foodItem, meal, calories, comments);
    this.newFoodSender.emit(newFood);
  }

}
