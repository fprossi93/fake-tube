import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.component.html',
/*   template: `<div class="container">
    <p>{{ title }}</p>
    <img [src]="image" />
    <button (click)="printToConsole()" class="btn btn-primary">clicca</button>

    <input type="text" [(ngModel)]="title" />
  </div> `, */
  styleUrls: ['./esercizio.component.scss'],
})
export class EsercizioComponent implements OnInit {
  title = 'Titolo Component Esercizio';
  valueChild = '';
  image = 'https://www.donnamoderna.com/content/uploads/2017/05/4376082-panda-725x533.jpg';
  constructor() {}

  ngOnInit(): void {}

  printToConsole() {
    console.log('click da button');
  }
  
  getValueFromChild(event:string) {
    this.valueChild = event;
  }
}
