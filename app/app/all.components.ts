
import { Products as products } from './components/admin/admin-products.component';
import { AdminNav as adminNav } from "./components/admin/admin-nav.component";
import { Admin as admin } from './components/admin/admin.component';

import { Contact as contact } from './components/core/contact.component';
import { Gallery as gallery } from './components/core/gallery.component';
import { Items as items } from './components/core/items.component';
import { Login as login } from './components/core/login.component';
import { Home as home } from './components/core/home.component';
import { Nav as nav } from "./components/core/nav.component";
import { App as app } from "./components/app.component";

export let Contact = contact;
export let AdminNav = adminNav;
export let Products = products;
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
        AdminNav,
        Products
    ]
}