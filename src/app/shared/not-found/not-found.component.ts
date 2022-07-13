import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  motivation: string = '';

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly route: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params: any) => {
        console.log(params);
        this.motivation = params.motivation;
      },
    });
  }

  goToHome() {
    this.route.navigate(['']);
  }
}
