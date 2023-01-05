import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})

export class CounterComponent {

 /* --- Variables --- */
 title: string = 'Contador App';
 number: number = 10;
 base: number = 5;

/* --- Methods --- */
 acum(value:number)
 {
   this.number += value;
 };

}
