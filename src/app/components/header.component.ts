import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "header-component",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
}
)
export class HeaderComponent {
    @Input()
    public name: string
}