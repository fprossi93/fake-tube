import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() clickCustom: EventEmitter<any> = new EventEmitter();
  isChangedTitle: boolean = false;
  label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.setTitle();
    this.clickCustom.emit({ labelEmit: this.label });
  }

  private setTitle() {
    this.isChangedTitle = !this.isChangedTitle;
    this.label = this.isChangedTitle ? 'Title from footer to navbar' : 'CorsoTube';
  }

}
