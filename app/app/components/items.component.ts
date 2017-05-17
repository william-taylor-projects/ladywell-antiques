import { Component } from "@angular/core";

@Component({
    selector: "items",
    templateUrl: 'app/components/items.component.html'
})
export class Items {
    items: any[];

    constructor() {
        this.items = [{}];
    }

    getItems() : any[] {
        return this.items;
    }
}