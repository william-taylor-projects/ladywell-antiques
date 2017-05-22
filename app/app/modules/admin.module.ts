
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { adminComponents } from '../all.components';
import { AdminRoutes } from "../model/app.routes";

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        NgbModule
    ],
    declarations: adminComponents(),
    exports: []
})
export class AdminModule {

}