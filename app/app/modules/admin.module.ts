
import { Admin, AdminNav, AdminProducts, AdminGallery } from '../includes/all.components';
import { GalleryService } from '../includes/all.services';
import { CategoryPipe } from '../includes/all.pipes';

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { NgModule } from "@angular/core";

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutes } from "../model/app.routes";
import { Model } from '../model/app.model';

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule
    ],
    providers: [CategoryPipe, Model, NgbCarouselConfig],
    declarations: [Admin, AdminNav, AdminProducts, AdminGallery],
    exports: []
})
export class AdminModule {

}