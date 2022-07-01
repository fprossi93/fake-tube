import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fake-tube';

  customTitle ='';

  onClickCustom(event: {label: string}){
    console.log(event)
    this.customTitle = event.label;
  }
}
