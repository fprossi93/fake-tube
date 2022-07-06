import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  @Input()
  customTitle = "";

  constructor(private readonly route: Router) { }

  ngOnInit(): void {
    this.customTitle = 'FakeTube'
  }

  goToEsercizi(){
    this.route.navigate(['private', 'esercizi']);
  }

}
