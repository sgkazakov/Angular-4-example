import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';
import { Subject } from "rxjs/Subject";

@Component({
    selector: "main-app",
    templateUrl: "main-app.component.html",
})
export class MainAppComponent {

}
