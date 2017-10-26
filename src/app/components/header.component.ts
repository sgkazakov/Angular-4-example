import { Component, AfterContentInit, AfterViewInit, AfterContentChecked } from "@angular/core";
import { TitleCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CustomPipePipe } from '../pipes/custom-pipe.pipe';

@Component({

    selector: "header-component",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
    providers: [
        DatePipe,
    ]
})
export class HeaderComponent implements AfterContentInit {

    private title = "Angular Recipies";
    private time: string;

    constructor(private datePipe: DatePipe) {
    }

    ngAfterContentInit() {
        this.time = this.datePipe.transform(new Date(), "yyyy/MMM/dd");
    }

}
