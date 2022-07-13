import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.scss']
})
export class FiglioComponent implements OnInit {

  @Input() title = 'TITOLO';
  @Output() emitValue: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public sendValue() {
    this.emitValue.emit('EMESSO val from figlio to padre');
  }

}
