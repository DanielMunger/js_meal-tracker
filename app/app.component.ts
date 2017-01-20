import { Component } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'app-root',
  template: `
  <h1>Follow Your Food</h1>
  <food-list [childFoodList]="masterFoodList" (editFoodSender)="editFood($event)"></food-list>
  <edit-food [childSelectedFood]="selectedFood" (doneEditingSender)="editDone()"></edit-food>
  <div class="container"><button class="button" (click)="showNewFoodForm()">Add a New Meal</button></div>
  <new-food *ngIf="newFoodBool" (newFoodSender)="newFood($event)" (formShowSender)="hideNewFoodForm($event)"></new-food>
  `
})

export class AppComponent{
  masterFoodList: Food[] = [
    new Food("Rice", "Dinner", 350, "Wish I made More.."),
    new Food("Apple", "Snack", 100, "An Apple a Day, does shit"),
    new Food("Avocado Toast", "Breakfast", 350, "Best Breakfast"),
    new Food("Mushroom and Bean Hash", "Lunch", 350, "Bit gassy..."),
    new Food("Cliff Bar", "Snack", 250, "Saved the Afternoon")
  ];

  newFood(newFoodFromChild: Food)
  {
    this.masterFoodList.push(newFoodFromChild);
  }
  newFoodBool: boolean = false;
  showNewFoodForm()
  {
    this.newFoodBool = true;
    console.log(this.newFoodBool);
  }
  hideNewFoodForm(foodFormBool:boolean)
  {
    this.newFoodBool = foodFormBool;
  }
  selectedFood = null;
  editFood(clickedFood)
  {
    this.selectedFood = clickedFood;
    console.log("hello");
  }
  editDone()
  {
    this.selectedFood = null;
  }

}
