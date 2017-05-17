
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { App } from "../components/app.component";
import { Nav } from "../components/nav.component";
import { Home } from '../components/home.component';
import { Gallery } from '../components/gallery.component';
import { Items } from '../components/items.component';
import { Reviews } from '../components/reviews.component';
import { Contact } from '../components/contact.component';
import { HttpModule } from '@angular/http';

let routes: Routes = [
    { path: 'home', component: Home },
    { path: 'gallery', component: Gallery },
    { path: 'items', component: Items },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: 'home' }
]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [App, Home, Gallery, Items, Contact, Nav],
    bootstrap: [App]
})
export class AppModule {

}