import { provideRouter, RouterConfig } from "@angular/router";

import { DashboardComponent } from "./dashboard";

const routes: RouterConfig = [
    { path: '', component: DashboardComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];