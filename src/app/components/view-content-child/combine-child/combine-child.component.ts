import { Component, ContentChild, ViewChild, AfterContentInit, AfterViewInit, ElementRef } from "@angular/core";
import { ContentChildComponent } from "../content-child/content-child.component";
import { ViewChildComponent } from "../view-child/view-child.component";

@Component({
    selector: "combine-child",
    templateUrl: "combine-child.component.html"
})
export class CombineChildComponent implements AfterContentInit, AfterViewInit {

    @ViewChild(ViewChildComponent)
    private viewChild: ViewChildComponent;

    private changdViewChildColor() {
        this.viewChild.viewChildColor = !this.viewChild.viewChildColor;
    }

    public ngAfterContentInit(): void {
        debugger
        // this div doesn't exist yet
        // this.viewChild.viewChildColor = true;
    }

    public ngAfterViewInit(): void {
        debugger
        // you can't change the value in after view init
        // you can if you call change detection
        // this.viewChild.viewChildColor = false;
    }
}