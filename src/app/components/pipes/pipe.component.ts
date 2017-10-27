import { Component, AfterContentInit, AfterViewInit, AfterContentChecked, OnInit } from "@angular/core";
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
    providers: [ DatePipe, CustomPipe ]
})
export class PipeComponent implements OnInit {

    private time: string;
    private title = "el pipe";

    private someArray = [{id: 1}, {id:2}];

    constructor(private datePipe: DatePipe) {
    }

    ngOnInit() {
        this.time = this.datePipe.transform(new Date(), "yyyy/MMM/dd");
    }
}
