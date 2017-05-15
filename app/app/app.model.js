"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem = (function () {
    function TodoItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
var Model = (function () {
    function Model() {
        this.user = "William";
        this.items = [
            new TodoItem("Action", false),
            new TodoItem("Action", false),
            new TodoItem("Action", false)
        ];
    }
    return Model;
}());
exports.Model = Model;
