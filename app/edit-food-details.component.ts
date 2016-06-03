import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <h3>Edit Description: </h3>
    <input [(ngModel)]="food.nameOfFood" class="col-sm-8 input-lg food-form"/>
    <input [(ngModel)]="food.description" class="col-sm-8 input-lg food-form"/>
    <input [(ngModel)]="food.calorieContent" class="col-sm-8 input-lg food-form"/>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
