import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { DashboardComponent } from "./dashboard";

@Component({
    moduleId: module.id,
    selector: 'pd-app',
    templateUrl: 'app.component.html',
    directives: [ ROUTER_DIRECTIVES ],
    precompile: [
        DashboardComponent
    ]
})
export class AppComponent { }