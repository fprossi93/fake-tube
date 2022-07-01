import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() customTitleInNavbar:string = '';

  constructor() { }

  ngOnInit(): void {
    this.customTitleInNavbar = 'title default';
  }

  
}
