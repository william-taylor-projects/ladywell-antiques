
import { RouteRoutes, AdminRoutes } from '../model/app.routes';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";


import { App } from "../components/app.component";
import { Nav } from "../components/nav.component";
import { Home } from '../components/home.component';
import { Gallery } from '../components/gallery.component';
import { Items } from '../components/items.component';
import { Admin } from '../components/admin.component';
import { Login } from '../components/login.component';
import { Contact } from '../components/contact.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin.module';

@NgModule({
    imports: [
        RouterModule.forRoot(RouteRoutes),
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        AdminModule,
        HttpModule,
    ],
    declarations: [
        App,
        Home,
        Gallery,
        Items,
        Contact
    ],
    bootstrap: [App]
})
export class AppModule {

}