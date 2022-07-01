import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.scss']
})
export class FiglioComponent implements OnInit {
  @Input()
  getTitle: any;


  @Output()
  emissione: EventEmitter<any> =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendValue(){
    this.emissione.emit(this.getTitle);
  }
}
