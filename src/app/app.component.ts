import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gpitube';
  customTitle = '';

  onClickCustom(event: {label_emit:string}) {

    console.log(event.label_emit);
    this.customTitle = event.label_emit;
  }
}
