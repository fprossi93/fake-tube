import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Output() watchLater: EventEmitter<string> = new EventEmitter();
  @Input() itemValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  pushWatchLater(item: string) {
    this.watchLater.emit(item);
  }
}
