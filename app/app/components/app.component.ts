
import { Component } from "@angular/core";
import { Model, TodoItem } from "../model/app.model";

@Component({
    selector: "todo-app",
    templateUrl: 'app/components/app.component.html'
})
export class AppComponent {
    model = new Model();

    getName() {
        return this.model.user;
    }

    addItem(action) {
        if(action != "") {
            this.model.items.push(new TodoItem(action, false))
        }
    }

    getTodoItems() {
        return this.model.items.filter(item => !item.done)
    }
}