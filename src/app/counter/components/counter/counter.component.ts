import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter : {{counter}} </h3>
  <button (click)="increment()" >Add</button>
  <button (click)="decrement(5)" >Remove</button>
  <button (click)="reset()" >Reset</button>
  `
})

export class CounterComponent {
  public counter:number=0;

  increment():void{
    this.counter+=1;
  }

  decrement(value:number):void{
    this.counter-=value;
  }

  reset(){
    this.counter=0;
  }


}
