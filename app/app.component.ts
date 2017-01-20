import { Component } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'app-root',
  template: `
  <h1>Follow Your Food</h1>
  <food-list></food-list>
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
}
