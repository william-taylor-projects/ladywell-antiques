
export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action
        this.done = done
    }
}

export class Model {
    user;
    items;

    constructor() {
        this.user = "William"
        this.items = [
            new TodoItem("Action", false),
            new TodoItem("Action", false),
            new TodoItem("Action", false)
        ]
    }
}
