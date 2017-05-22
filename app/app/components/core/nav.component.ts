
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "nav-bar",
    templateUrl: 'app/components/core/nav.component.html'
})
export class Nav {
    isNavbarCollapsed: boolean;

    constructor() {
        this.isNavbarCollapsed = true;
    }

    get color()  {
        if(window.location.pathname == '/home')
            return 'rgba(0, 0, 0, 0.25)';
        else 
            return '#81776d';
    }
}