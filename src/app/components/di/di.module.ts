import { NgModule, InjectionToken } from "@angular/core";

import { DiHostComponent, BeveragesComponent } from "./di.components";
import { CommonModule } from "@angular/common";
import { PizzaService } from "./services";

interface AppConfig {
    apiEndpoint: string;
    title: string;
}

let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

const REAL_CONFIG: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'Dependency Injection'
};

let version = new InjectionToken<string>("api");

@NgModule({
    declarations: [DiHostComponent, BeveragesComponent],

    imports: [CommonModule],

    exports: [DiHostComponent],

    providers: [
        { provide: APP_CONFIG, useValue: REAL_CONFIG },
        { provide: version, useValue: 'api/v1/' },
        PizzaService
    ]

})
export class DiModule { }
