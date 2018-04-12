//This is the Angular module
//Used to describe an application or a group of related features.
//Every application has a root module, which provides Angular with the info it needs to start.

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
//This points to the component
//if i had multiple components, i would probably have multiple of these imports i'm assuming
import { AppComponent } from "./app.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule{ }

