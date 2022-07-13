import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() customTitle: string = '';

  constructor(public readonly route: Router) {}

  ngOnInit(): void {
    this.customTitle = 'TITLE on INIT';
  }

  goToEsercizi() {
    this.route.navigate(['private', 'esercizi']);
  }
}
