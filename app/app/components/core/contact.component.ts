import { Component } from "@angular/core";

@Component({
    selector: "contact", 
    templateUrl: 'app/components/core/contact.component.html'
})
export class Contact {
    submit(email, password, message) {
        console.log('Entered', email, password, message);
    }
}