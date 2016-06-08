// imports component code from angular library
import { Component } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

//annotation or blueprint of app.component
@Component({
  // names HTML tag under selector property
  selector: 'my-app',
  // lists files whose HTML we want to display
  directives: [FoodListComponent],
  // <food-list line loads foodList component in appComponent by using selector in foodList in tag. [foodList] indicates component input
  // (onFoodSelect) line is an output binding that emits the click event. It says when a food from the list of foods is selected, trigger the foodWasSelected method on the component class, then pass in the current click event
  template: `
    <div class="container">
      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  `
})
// adds a class definition for an object food, defined as an empty array. exporting makes app.component available to other files later
export class AppComponent {
  //creates public property called foods of type Food (the name of the model class), identifying foods as an array of Task objects
  public foods: Food[];
     constructor(){
       // sets this.foods equal to a new instance of Food
       this.foods = [
         // food has 4 properties, including an id # to keep track of each unique food
        new Food("Ceviche", 0, "Octopus, cucumber, cilantro, lemon juice", 511),
      ];
      console.log(this.foods);
     }
  // defines input or method triggered on click event. foodWasSelected method takes a parameter called clickedFood of type Food. Void means function not expected to return anything
  foodWasSelected(clickedFood: Food): void {
  }
}
