import { Injectable, OnDestroy } from "@angular/core";

interface Beer {
    name: string;
    alc: number;
}

// not that we don't actually need to make these classes Injectable
// but it's considered a good practice
export abstract class BeerProviderService {
    getBeer: () => Beer;
}

@Injectable()
export class BeerService implements OnDestroy, BeerProviderService {

    constructor() {
        console.log("beer service is created");
    }
    
    makeBeer: () => void;
    
    getBeer: () => Beer;
    
    ngOnDestroy() {
        console.log(" ;( beer service is destroyed");
    }
}

@Injectable()
export class PizzaService implements OnDestroy {
    constructor() {
        console.log("pizza service is created");
    }

    ngOnDestroy() {
        console.log("never destroyed");
    }
}

@Injectable()
export class CoffeeService implements OnDestroy {
    constructor() {
        console.log("coffee service is created");
    }

    ngOnDestroy() {
        console.log("coffee destroyed");
    }
}
