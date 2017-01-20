import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div class="container">
    <h4>View Meals by Type</h4>
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
    <hr>
    <h4>Recent Meals:</h4>
    <div class="row" *ngFor="let food of childFoodList | mealtype:filter">
      <div class="col-md-8">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{food.item}}</span>
          <div class="row">
            <div class="col-md-6">
              <p>You Had {{food.item}}, for {{food.meal}}. It Contained {{food.calories}} calories.</p>
            </div>
            <div class="col-md-6">
              <p>"{{food.comments}}"</p>
            </div>
          </div>
        </div>
        <div class="card-action">
          <a (click)="editFood(food)" href="#edit">Edit</a>
        </div>
      </div>
    </div>
  </div>
  `
  // <div class="row">
  //      <div class="col s12 m6">
  //        <div class="card blue-grey darken-1">
  //          <div class="card-content white-text">
  //            <span class="card-title">Card Title</span>
  //            <p>I am a very simple card. I am good at containing small bits of information.
  //            I am convenient because I require little markup to use effectively.</p>
  //          </div>
  //          <div class="card-action">
  //            <a href="#">This is a link</a>
  //            <a href="#">This is a link</a>
  //          </div>
  //        </div>
  //      </div>
  //    </div>

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
