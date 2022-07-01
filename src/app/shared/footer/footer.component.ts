import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output()
  clickCustom: EventEmitter<any> = new EventEmitter();
  public isChangeTitle: boolean = false;
  public lable: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.setTilte();
    this.clickCustom.emit({label: this.lable});
  }

  private setTilte(){
    this.isChangeTitle = !this.isChangeTitle;
    this.lable = this.isChangeTitle? 'Title form footer to navbar' : 'FakeTube'
  }
}
