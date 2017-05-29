
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Model, Category, Item } from '../../model/app.model';
import { Component } from "@angular/core";

@Component({
    selector: "items",
    templateUrl: 'app/components/core/items.component.html'
})
export class Items {
    selectedCategory: Category = null;
    collapseSearch: boolean;

    constructor(private model: Model, private dialog: NgbModal) {
        this.selectedCategory = model.wildcardCategory();
        this.collapseSearch = false;
    }

    openItem(model: any, item: Item) {
        this.dialog.open(model, { size: 'lg' }).result.then(() => {
            console.log('Closing modal');
        });
    }

    onSelected(category: Category) {
        this.selectedCategory = category;
    }

    getCategoryCount(cat: Category): number {
        if (cat.wildcard) {
            return this.getItems().length;
        } else {
            return this.model.itemsWithCategory(cat);
        }
    }

    getCategories(): Category[] {
        return this.model.categories;
    }

    getItems(): Item[] {
        return this.model.items;
    }
}