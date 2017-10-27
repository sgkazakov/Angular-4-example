import { Component, AfterContentInit, AfterViewInit, AfterContentChecked } from "@angular/core";
import { TitleCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CustomPipe } from './custom-pipe.pipe';

@Component({

    selector: "pipes",
    template: `
    <h1>
        {{ time }}
        {{ title | customPipe: someArray }} 
    </h1>
    `,

    providers: [
        DatePipe,
        CustomPipe
    ]
})
export class PipeComponent implements AfterContentInit {

    private title = "el pipe";
    private time: string;

    private someArray = [{id: 1}, {id:2}];

    constructor(private datePipe: DatePipe) {
    }

    ngAfterContentInit() {
        this.time = this.datePipe.transform(new Date(), "yyyy/MMM/dd");
    }
}
