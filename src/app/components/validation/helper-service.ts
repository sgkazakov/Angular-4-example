import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import 'rxjs/add/operator/delay'

@Injectable()
export class HelperService {

    validateOnServer(value: number) {
        if (value > 9000) {
            return Observable.of({ isValid: true }).delay(500)
        } else {
            return Observable.of({ isValid: false }).delay(2000)
        }
    }

}