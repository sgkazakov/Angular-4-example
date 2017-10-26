import { Component, ViewChild, ElementRef, ContentChild, AfterContentInit, AfterViewInit } from "@angular/core";
import { ContentChildComponent } from "../content-child/content-child.component";
import { Router } from "@angular/router";

@Component({
    selector: "view-child",
    templateUrl: "./view-child.component.html",
    styleUrls: ["view-child.component.css"]
})
export class ViewChildComponent {

    @ContentChild(ContentChildComponent)
    private contentChild: ContentChildComponent;

    public viewChildColor = false;

    public changeContentChildText() {
        this.contentChild.text = "Changed content child";
        this.contentChild.changeConentColor = !this.contentChild.changeConentColor;
    }
}