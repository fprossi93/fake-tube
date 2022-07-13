import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizi',
  templateUrl: './esercizi.component.html',
  // template: `
  // <div class="container">
  //   <h3>{{ title }}</h3>
  //   <img [src]="img" />
  //   <input type="text" [(ngModel)]="title" />
  //   <button class="btn btn-primary" (click)="printToConsole()">BTN</button>
  // </div>`,
  styleUrls: ['./esercizi.component.scss'],
})
export class EserciziComponent implements OnInit {
  title = 'Titolo esercizi component';
  valueChild = '';
  img =
    'https://lh3.googleusercontent.com/DQj-gonAVTlhj5W7_DhBVmX-0P42rfvx8TSp1WfQeZ6iFIon6InIS8M4Nbqy7Ql5ahgEXSiRDiWD88v-bcPYIEAg3Q=w640-h400-e365-rj-sc0x00ffffff';

  constructor() { }

  ngOnInit(): void { }

  printToConsole() {
    console.log('WE!');
  }

  getValueFromChild(event: string) {
    this.valueChild = event;
  }

}
