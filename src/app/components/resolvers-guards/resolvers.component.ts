import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    templateUrl: "resolver.component.html"
})
export class ResolverComponent {
    private id: number;
    constructor(private router: ActivatedRoute) {
        // router.data.subscribe(resolveID => this.id = resolveID.id)
    }
}