
import { Routes } from '@angular/router';
import { App } from "../components/app.component";
import { Nav } from "../components/nav.component";
import { Home } from '../components/home.component';
import { Gallery } from '../components/gallery.component';
import { Items } from '../components/items.component';
import { Admin } from '../components/admin.component';
import { Login } from '../components/login.component';
import { Contact } from '../components/contact.component';

export const RouteRoutes: Routes = [
    { path: 'home', component: Home },
    { path: 'gallery', component: Gallery },
    { path: 'items', component: Items },
    { path: 'contact', component: Contact },
    { path: 'admin', component: Admin },
    { path: 'login', component: Login },
    { path: '**', redirectTo: 'home' }
];

export const AdminRoutes: Routes = [
    { path: 'admin', component: Admin },
    { path: 'login', component: Login }
];

