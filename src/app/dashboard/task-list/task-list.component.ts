import { Component, Input } from "@angular/core";

import { Task } from "../../shared";

@Component({
    moduleId: module.id,
    selector: "pd-task-list",
    templateUrl: "task-list.component.html"
})
export class TaskListComponent {
    @Input() tasks: Task[];
}