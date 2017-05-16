
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "nav-bar",
    templateUrl: 'app/components/nav.component.html'
})
export class Nav {
    constructor() {

    }

    home() {
        console.log('Home');
    }

    gallery() {
        console.log('Gallery');
    }

    items() {
        console.log('Items');
    }

    reviews() {
        console.log('Reviews');
    }

    contact() {
        console.log('Contact');
    }
}