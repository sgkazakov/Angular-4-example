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
import { HelperService } from "../components/validation/helper-service";
import { ValidationComponent } from "../components/validation/validation.component";
import { PipeComponent } from "../components/pipes/pipe.component";
import { CustomPipe } from "../components/pipes/custom-pipe.pipe";
import { HostComponent } from "../components/custom-form/host.component";
import { CustomFormComponent } from "../components/custom-form/custom-form.component";
import { DiModule } from "../components/di/di.module";
import { DiHostComponent } from "../components/di/di.components";


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
        path: "validation", component: ValidationComponent
    },
    {
        path: "pipes", component: PipeComponent
    }, 
    {
        path: "host", component: HostComponent
            
    }, {
        path: "di-host", component: DiHostComponent
    }]
@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        DiModule
    ],
    declarations: [MainAppComponent,
        ParentComponent,
        ResolverComponent,
        ViewChildComponent,
        ContentChildComponent,
        ValidationComponent,
        PipeComponent,
        CustomPipe,
        CustomFormComponent,
        HostComponent
    ],
    providers: [
        IdResolver,
        HelperService
    ],
    exports: [MainAppComponent]

})
export class MainAppModule {

}