
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Model, Category, Item } from '../../model/app.model';
import { Component } from "@angular/core";

@Component({
    selector: "items",
    moduleId: module.id,
    templateUrl: './items.component.html'
})
export class Items {
    selectedCategory: Category = null;
    selectedItem: Item = null;
    collapseSearch: boolean;

    constructor(private model: Model, private dialog: NgbModal) {
        this.selectedCategory = model.wildcardCategory();
        this.collapseSearch = false;
    }

    buy(item: Item) {
        if (item != null) {
            window.open("https://www.ebay.co.uk", '_blank');
        }
    }

    openItem(model: any, item: Item) {
        let modelOptions: NgbModalOptions = {
            backdrop: 'static',
            size: 'lg'
        };

        this.selectedItem = item;
        this.dialog.open(model, modelOptions).result.then(() => {
            // TODO: Handle modal close
        }).catch(err => {
            console.error(err);
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