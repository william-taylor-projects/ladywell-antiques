
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

    homepage() : boolean {
        return this.router.url == '/home';
    }

    get color() {
        return this.homepage() ? 'rgba(0, 0, 0, 0.25)' : '#81776d';
    }

    get shadow() {
        return this.homepage() ? 'none;' : '#635f5f 0px 4px 2px;';
    }
}