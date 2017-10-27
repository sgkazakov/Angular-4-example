import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';
import { Subject } from "rxjs/Subject";

@Component({
    selector: "main-app",
    template: `
    <h1> App </h1>
    <nav>
        <a routerLink="child" routerLinkActive="active">
            View Children
        </a>
        <a routerLink="pipes" routerLinkActive="active">
            Pipes
        </a>
        <a routerLink="validation" routerLinkActive="active">
            Validation
        </a>
        <a routerLink="host" routerLinkActive="active">
            Rate us
        </a>
        <a routerLink="resolver/5" routerLinkActive="active">
            Resolvers
        </a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styles: ["a {margin: 5px}"]
})
export class MainAppComponent {

}
