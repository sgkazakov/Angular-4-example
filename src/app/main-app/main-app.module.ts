import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainAppComponent } from "./main-app.component";
import { Routes, RouterModule } from "@angular/router";
import { ParentComponent } from '../components/view-content-child/parent/parent.component';

const ROUTES: Routes = [{
    path: "folder/child", component: ParentComponent,

}]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES)],
    declarations: [MainAppComponent],
    exports: [MainAppComponent]

})
export class MainAppModule {

}