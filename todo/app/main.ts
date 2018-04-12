//This wires up the app and bootstraps it?

//loads the root module declared in app.module.ts

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule} from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
