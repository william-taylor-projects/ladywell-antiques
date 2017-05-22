
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { adminComponents } from '../all.components';
import { AdminRoutes } from "../model/app.routes";

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule
    ],
    declarations: adminComponents(),
    exports: []
})
export class AdminModule {

}