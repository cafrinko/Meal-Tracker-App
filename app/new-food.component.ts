import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class="form clearfix">
      <h3>Create Food:</h3>
      <div class="form-group">
        <input placeholder="Name Of Food" class="input-lg" #newFoodName>
      </div>
      <div class="form-group">
        <input placeholder="Description" class="input-lg" #newDescription>
      </div>
      <div class="form-group">
        <input placeholder="Calorie Content" class="input-lg" #newCal>
      </div>
      <button (click)="addFood(newFoodName, newDescription, newCal)" class="btn btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userFoodName: HTMLInputElement, userDescription: HTMLInputElement, userCalorieContent: HTMLInputElement){
    var myNewFood = new Food(userFoodName.value, 0, userDescription.value, parseFloat(userCalorieContent.value) );
   this.onSubmitNewFood.emit(myNewFood);

 }

}
