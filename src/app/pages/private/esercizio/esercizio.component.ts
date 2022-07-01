import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.component.html',
  styleUrls: ['./esercizio.component.scss']
})
export class EsercizioComponent implements OnInit {

  public title : any;
  public newTitle : any;
  public image = 'https://www.nieddittas.it/wp-content/uploads/2021/12/qual-e-il-mare-piu-bello-della-sardegna.jpg';

  constructor() { }


  ngOnInit(): void {
  }


  eventEmit(event: any){
    console.log(event)
    this.newTitle = event;
  }

}
