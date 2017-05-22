
import { Component } from "@angular/core";

@Component({
    selector: "products",
    templateUrl: 'app/components/admin/admin-products.component.html'
})
export class Products {
    constructor() {

    }

    get products() {
        return [
            {},
            {},
            {}
        ]
    }
}