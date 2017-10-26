import { Component, ContentChild, ViewChild, AfterContentInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from "@angular/core";
import { ContentChildComponent } from "../content-child/content-child.component";
import { ViewChildComponent } from "../view-child/view-child.component";

@Component({
    selector: "parent",
    templateUrl: "parent.component.html"
})
export class ParentComponent implements AfterContentInit, AfterViewInit {

    @ViewChild(ViewChildComponent)
    private viewChild: ViewChildComponent;

    @ViewChildren(ContentChildComponent)
    private divChildren: QueryList<ContentChildComponent>;

    private changdViewChildColor() {
        this.viewChild.viewChildColor = !this.viewChild.viewChildColor;
    }

    public ngAfterContentInit(): void {
        debugger
        if (this.divChildren != null) {

            this.divChildren.forEach(a => console.log(a.text))
        }
        // this div doesn't exist yet
        // this.viewChild.viewChildColor = true;
    }

    public ngAfterViewInit(): void {
        debugger
        
        // you can't change the value in after view init
        // you can if you call change detection
            // this.divChildren.forEach((a, index) => a.text = index.toString())
            // this.viewChild.viewChildColor = false;
    }
}