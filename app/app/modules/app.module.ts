
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { App } from "../components/app.component";
import { Nav } from "../components/nav.component";
import { Home } from '../components/home.component';
import { Gallery } from '../components/gallery.component';
import { Items } from '../components/items.component';
import { Admin } from '../components/admin.component';
import { Login } from '../components/login.component';
import { Contact } from '../components/contact.component';
import { HttpModule } from '@angular/http';

let routes: Routes = [
    { path: 'home', component: Home },
    { path: 'gallery', component: Gallery },
    { path: 'items', component: Items },
    { path: 'contact', component: Contact },
    { path: 'admin', component: Admin },
    { path: 'login', component: Login },
    { path: '**', redirectTo: 'home' }
]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        App, 
        Admin, 
        Login, 
        Home, 
        Gallery, 
        Items, 
        Contact, 
        Nav,
        Admin,
        Login
    ],
    bootstrap: [App]
})
export class AppModule {

}