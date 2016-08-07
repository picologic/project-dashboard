import { Component } from "@angular/core";

import { ProjectFilterComponent } from "./project-filter";
import { ClientService, ProjectService } from "../shared";

@Component({
  moduleId: module.id,
  selector: 'pd-dashboard',
  templateUrl: 'dashboard.component.html',
  directives: [
      ProjectFilterComponent
  ],
  providers: [
      ClientService,
      ProjectService
  ]
})
export class DashboardComponent { 
    constructor() { }
}