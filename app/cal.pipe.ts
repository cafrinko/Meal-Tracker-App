import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "cal",
  pure: false
})
export class CalPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredCalState = args[0];
    if(desiredCalState === "high") {
      return input.filter((food) => {
        return food.calorieContent >= 500;
      });
    } else if (desiredCalState === "low") {
      return input.filter((food) => {
        return food.calorieContent < 500;
      });
    } else {
      return input;
    }

  }
}
