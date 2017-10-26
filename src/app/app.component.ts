import { Component, Inject, forwardRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <h1> Angular Recipies </h1>
  <div>
    <a routerLink="main" routerLinkActive="active">
      Main app
    </a>
  </div>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) { }
}
