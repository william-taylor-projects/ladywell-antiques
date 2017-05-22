
import { Component } from "@angular/core";
import { Model, Item } from '../../model/app.model';

@Component({
    selector: "products",
    templateUrl: 'app/components/admin/admin-products.component.html'
})
export class AdminProducts {
    constructor(private model: Model) {
        // ...
    }

    delete(item: Item, index: number) {
        // TODO: delete item
    }

    get products() : Item[] {
        return this.model.items;
    }
}