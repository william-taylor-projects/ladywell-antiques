
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "login",
    templateUrl: 'app/components/login.component.html'
})
export class Login {
    constructor(private router: Router) {

    }

    login() {
        this.router.navigate(['/admin']);
    }
}