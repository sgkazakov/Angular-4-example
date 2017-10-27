import { Component } from "@angular/core";
import { BeerProviderService, BeerService, CoffeeService } from "./services";


@Component({
    selector: 'di-host',
    template: `
        <button (click)="onClick()"> 
            Click for some Beer
        </button>
        <di *ngIf="toggle">
        </di>
        
    `
})
export class DiHostComponent {

    private toggle = false

    constructor() { }

    onClick() {
        this.toggle = !this.toggle;
    }

}

@Component({
    selector: 'di',
    template: ``,
    providers: [
        { provide: BeerProviderService, useClass: BeerService },
        CoffeeService
    ]
})
export class BeveragesComponent {

    constructor(private beerService: BeerProviderService,
        private coffeeService: CoffeeService) {
        
        // service has getBeer();
        // service doesn't have getBeer();
    }
}
