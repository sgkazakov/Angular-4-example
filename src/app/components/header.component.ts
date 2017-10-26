<<<<<<< HEAD
import { Component, Input } from "@angular/core";
=======
import { Component, AfterContentInit, AfterViewInit, AfterContentChecked } from "@angular/core";
import { TitleCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CustomPipePipe } from '../pipes/custom-pipe.pipe';
>>>>>>> dd57bd59e9376eee65fff7f343c01a58eeb1575f

@Component({

    selector: "header-component",
    templateUrl: "./header.component.html",
<<<<<<< HEAD
    styleUrls: ["./header.component.css"]
}
)
export class HeaderComponent {
    @Input()
    public name: string
=======
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

>>>>>>> dd57bd59e9376eee65fff7f343c01a58eeb1575f
}