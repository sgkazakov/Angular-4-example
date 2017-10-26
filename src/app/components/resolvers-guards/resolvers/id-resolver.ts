import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class IdResolver implements Resolve<number> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): number {
        return route.params.id;
    }

}