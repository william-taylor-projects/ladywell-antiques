
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "login",
    templateUrl: 'app/components/login.component.html'
})
export class Login {
    private username: string;
    private password: string;

    constructor(private router: Router) {
        
    }

    onUserKey(value: string) {
        this.username = value;
    }

    onPswKey(value: string) {
        this.password = value;
    }

    login() {
        if(this.username == 'admin' && this.password == 'secret') {
            this.router.navigate(['/admin']);
        }
    }
}