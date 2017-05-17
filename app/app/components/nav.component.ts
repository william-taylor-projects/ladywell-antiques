
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "nav-bar",
    templateUrl: 'app/components/nav.component.html'
})
export class Nav {
    get color()  {
        if(window.location.pathname == '/home')
            return 'tranparent';
        else 
            return '#81776d';//'#99836c'// '#333';
    }
}