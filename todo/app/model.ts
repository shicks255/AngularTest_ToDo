//A model class
//Questions:
//Can i have more than 1 modeled thing in here?

export class Model{
    user;
    items;

    constructor(){
        this.user = "Steve";
        this.items =
            [
                new ToDoItem("Buy flowers", false),
                new ToDoItem("Get Shoes", false),
                new ToDoItem("Collect Tickets", true),
                new ToDoItem("Call Rini", false)
            ]
    }
}
export class ToDoItem{
    action;
    done;

    constructor(action, done)
    {
        this.action = action;
        this.done = done;
    }
}
