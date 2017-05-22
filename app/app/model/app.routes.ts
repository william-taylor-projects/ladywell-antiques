
import { App, Home, Gallery, Items, Contact } from '../all.components';
import { Admin, Login } from '../all.components';
import { Routes } from '@angular/router';

export const RouteRoutes: Routes = [
    { path: 'home', component: Home },
    { path: 'gallery', component: Gallery },
    { path: 'items', component: Items },
    { path: 'contact', component: Contact },
    { path: 'login', component: Login },
    { path: '**', redirectTo: 'home' }
];

export const AdminRoutes: Routes = [
    { path: 'admin', component: Admin }
];

