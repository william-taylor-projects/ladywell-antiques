
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { Admin, Login, Nav } from '../components/all.components';
import { AdminRoutes } from "../model/app.routes";

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        NgbModule
    ],
    declarations: [Nav, Admin, Login],
    exports: [Nav]
})
export class AdminModule {

}