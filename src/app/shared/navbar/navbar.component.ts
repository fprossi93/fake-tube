import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  customTitle = "";

  constructor() { }

  ngOnInit(): void {
    this.customTitle = 'FakeTube'
  }

}
