
import * as detect from 'detect-mobile-browser';
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "nav-bar",
    templateUrl: 'app/components/core/nav.component.html'
})
export class Nav {
    isNavbarCollapsed: boolean;
    browser: any;

    constructor(private router: Router) {
        this.isNavbarCollapsed = true;
        this.browser = detect(false);
    }

    route(): string[] {
        return !this.browser.isAny() ? ['/login'] : ['/home']
    }

    accessDashboard() {
        this.router.navigate(this.route());
    }

    get color() {
        return this.router.url == '/home' ? 'rgba(0, 0, 0, 0.25)' : '#81776d';
    }
}