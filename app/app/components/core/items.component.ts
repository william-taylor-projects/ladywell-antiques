
import { Model, Category, Item } from '../../model/app.model';
import { Component } from "@angular/core";

@Component({
    selector: "items",
    templateUrl: 'app/components/core/items.component.html'
})
export class Items {
    selectedCategory: Category = null;

    constructor(private model: Model) {
        this.selectedCategory = model.wildcardCategory();

        console.log(this.selectedCategory, model.categories);
    }

    onSelected(category: Category) {
        this.selectedCategory = category;
    }

    getCategoryCount(cat: Category) : number {
        if(cat.wildcard) {
            return this.getItems().length;
        } else {
            return this.model.itemsWithCategory(cat);
        }
    }

    getCategories() : Category[] {
        return this.model.categories;
    }

    getItems() : Item[] {
        return this.model.items;
    }
}