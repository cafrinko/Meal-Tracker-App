import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import { FoodComponent } from './food.component';
import { CalPipe } from './cal.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [CalPipe],
  directives: [EditFoodDetailsComponent, NewFoodComponent, FoodComponent],
  template: `
  <select (change)="onChangeCal($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="high">Show High Calorie</option>
    <option value="low" >Show Low Calorie</option>
  </select>
  <food-display *ngFor="#currentFood of foodList | cal:filterCal"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>
  <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
  </edit-food-details>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterCal: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood: Food): void {
    newFood.id = this.foodList.length;
    this.foodList.push(newFood);
  }
  onChangeCal(filterOption) {
    this.filterCal = filterOption;
  }
}
