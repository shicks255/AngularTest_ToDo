//COMPONENT
//These wire up the templates and add functionality
//Manages the template and provides it with the data and logic
//it needs
//Acts as bridge between models and templates

import { Component } from "@angular/core";
//imports the Model file
import { Model, ToDoItem } from "./model";

//decorator, selects css selector element,
//and the url to the template file
@Component({
    selector: "todo-app",
    templateUrl: "app/app.component.html"
})

//class that we instantiate and define the
//previously data binded method 'getName'
export class AppComponent {
    model = new Model();

    getName()
    {
        return this.model.user;
    }

    getToDoItems()
    {
        return this.model.items.filter(item => !item.done);
    }

    getDoneItems()
    {
        return this.model.items.filter(item => item.done);
    }

    addItem(newItem)
    {
        if (newItem != '')
            this.model.items.push(new ToDoItem(newItem, false));
    }
}