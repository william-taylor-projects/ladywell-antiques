
import { App, Nav, Home, Gallery, Items, Contact, Login } from '../includes/all.components';
import { GalleryService } from '../includes/all.services';
import { AdminModule } from '../includes/all.modules';
import { CategoryPipe } from '../includes/all.pipes';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouteRoutes } from '../model/app.routes';
import { Model } from '../model/app.model';

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        RouterModule.forRoot(RouteRoutes),
        NgbModule.forRoot(),
        BrowserModule,
        AdminModule,
    ],
    providers: [GalleryService, Model, NgbCarouselConfig],
    declarations: [App, Nav, Home, Gallery, Items, Contact, Login, CategoryPipe],
    bootstrap: [App]
})
export class AppModule {

}