import { Component } from "@angular/core";

import { ProjectFilterComponent } from "./project-filter";
import { TaskListComponent } from "./task-list";
import { ClientService, ProjectService, TaskService, Task } from "../shared";

@Component({
  moduleId: module.id,
  selector: 'pd-dashboard',
  templateUrl: 'dashboard.component.html',
  directives: [
      ProjectFilterComponent,
      TaskListComponent
  ],
  providers: [
      ClientService,
      ProjectService,
      TaskService
  ]
})
export class DashboardComponent { 
    project_id: number;
    client_id: number;
    tasks: Task[];

    constructor(private taskService: TaskService) { }

    getTasks(project_id: number) {
        this.taskService.getTasks(project_id)
            .then(tasks => this.tasks = tasks);
    }

    onClientSelected(client_id: number) {
        this.client_id = client_id;
        this.project_id = null;
    }

    onProjectSelected(project_id: number) {
        this.project_id = project_id;
        this.getTasks(project_id);
    }
}