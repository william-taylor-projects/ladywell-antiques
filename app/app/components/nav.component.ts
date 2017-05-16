
import { Component } from "@angular/core";

@Component({
    selector: "nav-bar",
    templateUrl: 'app/components/nav.component.html'
})
export class Nav {
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