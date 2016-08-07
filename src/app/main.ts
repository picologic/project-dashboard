import { bootstrap }            from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS }       from "@angular/http";
import { AppComponent }         from './app.component';
import { appRouterProviders }   from './app.routes';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    appRouterProviders
])
.catch(err => console.log(err));