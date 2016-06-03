import { Component } from 'angular2/core';
import { Beer } from './beer.model';


@Component({
    selector: 'beer-display',
    inputs: ['beer'],
  template: `
  <div class="mycheckbox">
    <div class="col-md-8">
      <h3><strong *ngIf="beer.low && beer.pintsRemaining > 0"><u>*{{ beer.nameOfBeer }}, {{ beer.brand}}, \${{ beer.price}}, {{ beer.alcoholContent}}%*</u></strong><span *ngIf="!beer.low">{{ beer.nameOfBeer }}, {{ beer.brand}}, \${{ beer.price}}, {{ beer.alcoholContent}}%</span><del *ngIf="beer.pintsRemaining === 0">{{ beer.nameOfBeer }}, {{ beer.brand}}, \${{ beer.price}}, {{ beer.alcoholContent}}%</del></h3>
      <div class="progress">
        <div class="progress-bar progress-bar-striped" [class.progress-bar-success]="beer.pintsRemaining >= 80" [class.progress-bar-warning]="beer.pintsRemaining < 80 && beer.pintsRemaining >=30" [class.progress-bar-danger]="beer.pintsRemaining < 30" role="progressbar" [style.width]="changeWidth()"></div>
      </div>
    </div>
    <div class="col-md-4 inline">
      <button *ngIf="beer.pintsRemaining > 0" class="btn inline" (click)="sellPint()">Sell Pint</button><h3 class="inline"> &#160; &#160; &#160;{{ beer.pintsRemaining }}</h3>
    </div>
    <br class="clearBoth" />
  </div>
  `
})

export class BeerComponent {
  public beer: Beer;
  sellPint(){
    this.beer.pintsRemaining -= 1;
    console.log(this.beer.pintsRemaining);
    if(this.beer.pintsRemaining < 10){
      this.beer.low = true;
    }
  }
  changeWidth(){
    return ((this.beer.pintsRemaining/124) * 100) + "%";
  }
}
