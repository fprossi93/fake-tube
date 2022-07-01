import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.scss']
})
export class FiglioComponent implements OnInit {

  @Input() titlefiglio = "titolo figlio";  
  @Output() emitValue:EventEmitter<any> = new EventEmitter();  
  constructor() { }

  ngOnInit(): void {
  }

  sendValue() {
    this.emitValue.emit("Invio valore da figlio a padre")
  }

}
