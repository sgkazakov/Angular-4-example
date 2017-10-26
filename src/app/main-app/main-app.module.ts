import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainAppComponent } from "./main-app.component";
import { Routes, RouterModule } from "@angular/router";
import { ParentComponent } from '../components/view-content-child/parent/parent.component';
import { ResolverComponent } from "../components/resolvers-guards/resolvers.component";
import { ContentChildComponent } from '../components/view-content-child/content-child/content-child.component';
import { ViewChildComponent } from '../components/view-content-child/view-child/view-child.component';
import { IdResolver } from '../components/resolvers-guards/resolvers/id-resolver';
import { PreloadedService } from '../preloaded-service';

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
    }]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)],
    declarations: [MainAppComponent,
        ParentComponent,
        ResolverComponent,
        ViewChildComponent,
        ContentChildComponent
    ],
    providers: [
        IdResolver
    ],
    exports: [MainAppComponent]

})
export class MainAppModule {

}