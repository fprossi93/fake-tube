import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'corsotube';
  customTitle = '';

  onClickCustom(event: { labelEmit: string }) {
    this.customTitle = event.labelEmit;
  }

}
