
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AdminRoutes } from "../model/app.routes";
import { adminModules } from '../all.components';

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