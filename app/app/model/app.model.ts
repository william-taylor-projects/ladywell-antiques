
export class TodoItem {
    action: string;
    done: boolean;

    constructor(action, done) {
        this.action = action
        this.done = done
    }
}

export class Model {
    user: string;
    items: TodoItem[];

    constructor() {
        this.user = "William"
        this.items = [
            new TodoItem("Action", false),
            new TodoItem("Action", false),
            new TodoItem("Action", false)
        ]
    }
}
