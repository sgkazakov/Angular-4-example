import { Component, AfterContentInit, AfterViewInit, AfterContentChecked } from "@angular/core";
import { TitleCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CustomPipePipe } from '../pipes/custom-pipe.pipe';

@Component({

    selector: "header-component",
    template: `
    <h1>
        {{ time }}
        {{ title | customPipe: [{id: 1}, {id:2}] }} 
    </h1>`,

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