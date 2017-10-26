import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { MainAppComponent } from "./main-app.component";
import { ParentComponent } from '../components/view-content-child/parent/parent.component';
import { ResolverComponent } from "../components/resolvers-guards/resolvers.component";
import { ContentChildComponent } from '../components/view-content-child/content-child/content-child.component';
import { ViewChildComponent } from '../components/view-content-child/view-child/view-child.component';
import { IdResolver } from '../components/resolvers-guards/resolvers/id-resolver';
import { HelperService } from "../components/validation-recipe/helper-service";
import { ValidationRecipeComponent } from "../components/validation-recipe/validation-recipe.component";

const ROUTES: Routes = [
    { path: '', component: MainAppComponent },
    {
        path: "child", component: ParentComponent
    },
    {
        path: "resolver/:id", component: ResolverComponent,
        resolve: {
            id: IdResolver
        }
    },
    {
        path: "validation", component: ValidationRecipeComponent
    }]
@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [MainAppComponent,
        ParentComponent,
        ResolverComponent,
        ViewChildComponent,
        ContentChildComponent,
        ValidationRecipeComponent
    ],
    providers: [
        IdResolver,
        HelperService
    ],
    exports: [MainAppComponent]

})
export class MainAppModule {

}