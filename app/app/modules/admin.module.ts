
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { adminModules } from '../components/all.components';
import { AdminRoutes } from "../model/app.routes";

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        NgbModule
    ],
    declarations: adminModules(),
    exports: []
})
export class AdminModule {

}