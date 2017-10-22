import { Component } from "@angular/core";


@Component({
    selector: "content-child",
    templateUrl: "content-child.component.html",
    styleUrls: ["content-child.component.css"]
})
export class ContentChildComponent {
    public text: string = "Initial text";
    public changeConentColor = false;
}