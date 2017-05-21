
import { AdminNav as adminNav } from "./admin-nav.component";
import { Contact as contact } from './contact.component';
import { Gallery as gallery } from './gallery.component';
import { Items as items } from './items.component';
import { Admin as admin } from './admin.component';
import { Login as login } from './login.component';
import { Home as home } from './home.component';
import { App as app } from "./app.component";
import { Nav as nav } from "./nav.component";

export let Contact = contact;
export let AdminNav = adminNav;
export let Gallery = gallery;
export let Items = items;
export let Admin = admin;
export let Login = login;
export let Home = home;
export let App = app;
export let Nav = nav;

export let coreModules = () => {
    return [
        App,
        Nav,
        Home,
        Gallery,
        Items,
        Contact,
        Login
    ]
}

export let adminModules = () => {
    return [
        Admin,
        AdminNav
    ]
}