
import { Model, Category, Item } from '../model/app.model';
import { Component } from "@angular/core";

@Component({
    selector: "items",
    templateUrl: 'app/components/items.component.html'
})
export class Items {
    constructor(private model: Model) {
       // ...
    }

    filter(category: Category) {
        alert('Filter time!');
    }

    getCategoryCount(cat: Category) : number {
        return this.model.itemsWithCategory(cat);
    }

    getCategories() : Category[] {
        return this.model.categories;
    }

    getItems() : Item[] {
        return this.model.items;
    }
}