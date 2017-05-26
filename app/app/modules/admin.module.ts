
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Admin, AdminNav, AdminProducts, AdminGallery } from '../all.components';
import { AdminRoutes } from "../model/app.routes";

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { NgModule } from "@angular/core";

import { Model } from '../model/app.model';
import { services } from '../all.services';
import { pipes } from '../all.pipes';

const myProviders = services().concat([Model, NgbCarouselConfig]);

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule
    ],
    providers: myProviders,
    declarations: [Admin, AdminNav, AdminProducts, AdminGallery],
    exports: []
})
export class AdminModule {

}