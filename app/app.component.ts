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
  public foods: Food[];
     constructor(){
       this.foods = [
        new Food("Ceviche", 0, "Octopus, cucumber, cilantro, lemon juice", 511),
      ];
      console.log(this.foods);
     }
  foodWasSelected(clickedFood: Food): void {
  }
}
