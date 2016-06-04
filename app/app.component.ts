import { Component } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  `
})

export class AppComponent {
  public food: Food[];
     constructor(){
       this.food = [
        new Food("Ceviche", 0, "Octopus, cucumber, cilantro, lemon juice", 511),
      ];
     }
  foodWasSelected(clickedFood: Food): void {
  }
}
