
import { App, components } from '../all.components';
import { AdminModule } from '../all.modules';
import { services } from '../all.services';
import { pipes } from '../all.pipes';

import { RouteRoutes, AdminRoutes } from '../model/app.routes';
import { Model } from '../model/app.model';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { NgModule } from "@angular/core";

const myProviders = services().concat([Model, NgbCarouselConfig]);
const myDeclarations =  components().concat(pipes());

@NgModule({
    imports: [
        RouterModule.forRoot(RouteRoutes),
        NgbModule.forRoot(),
        BrowserModule,
        AdminModule,
    ],
    providers: myProviders,
    declarations:  myDeclarations,
    bootstrap: [App]
})
export class AppModule {

}