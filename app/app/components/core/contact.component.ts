import { Component } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: "contact",
    moduleId: module.id,
    templateUrl: './contact.component.html'
})
export class Contact {
    private url = 'http://williamsamtaylor.co.uk:3004/send';

    constructor(private http: Http) {
        // ...
    }

    clear(elements) {
        elements.forEach(div => div.value = "");
    }

    submit(name, email, message) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = {
            subject: "Ladywell Antiques",
            message: message,
            email: email,
            name: name
        };

        let options = new RequestOptions({ headers: headers, method: "post" });
        let promise = this.http.post(this.url, body, options).toPromise()

        promise.then(resp => {
            console.log('Success ->', resp);
        }).catch(err => {
            console.log('Error ->', err);
        })
    }
}