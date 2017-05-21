
import { AdminNav as adminNav } from "./components/admin-nav.component";
import { Contact as contact } from './components/contact.component';
import { Gallery as gallery } from './components/gallery.component';
import { Items as items } from './components/items.component';
import { Admin as admin } from './components/admin.component';
import { Login as login } from './components/login.component';
import { Home as home } from './components/home.component';
import { App as app } from "./components/app.component";
import { Nav as nav } from "./components/nav.component";

export let Contact = contact;
export let AdminNav = adminNav;
export let Gallery = gallery;
export let Items = items;
export let Admin = admin;
export let Login = login;
export let Home = home;
export let App = app;
export let Nav = nav;

export let components = () => {
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

export let adminComponents = () => {
    return [
        Admin,
        AdminNav
    ]
}