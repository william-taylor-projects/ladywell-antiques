
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "nav-bar",
    templateUrl: 'app/components/nav.component.html'
})
export class Nav {
    get color()  {
        if(window.location.pathname == '/home')
            return 'rgba(55, 55, 55, 0.5)';
        else 
            return 'rgb(161, 178, 206)';
    }
}