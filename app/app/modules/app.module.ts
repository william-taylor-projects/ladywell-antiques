
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { App } from "../components/app";

let routes = RouterModule.forChild([
    { path: 'home', component: App },
    {path: '**', redirectTo: 'home'}
])

@NgModule({
    imports: [BrowserModule, FormsModule, routes],
    declarations: [App],
    bootstrap: [App]
})
export class AppModule {

}