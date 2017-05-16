
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { App } from "../components/app.component";
import { Nav } from "../components/nav.component";
import { Home } from '../components/home.component';

let routes = RouterModule.forRoot([
    { path: '', component: App },
    { path: '**', redirectTo: '' }
])

console.log(routes);

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [App, Nav],
    bootstrap: [App, Nav]
})
export class AppModule {

}