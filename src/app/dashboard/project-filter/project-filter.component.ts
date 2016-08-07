import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { ClientService, Client, Project, ProjectService } from "../../shared";

@Component({
    moduleId: module.id,
    selector: "pd-project-filter",
    templateUrl: "project-filter.component.html"
})
export class ProjectFilterComponent implements OnInit {
    @Output() onClientSelected = new EventEmitter<number>();
    @Output() onProjectSelected = new EventEmitter<number>();
    client_id: number;
    project_id: number;

    private allProjects: Project[];
    private clients: Client[];
    private projects: Project[];

    constructor(private clientService: ClientService, private projectService: ProjectService) { }

    getClients() {
        this.clientService.getClients(true)
            .then(clients => this.clients = clients);
    }

    getProjects() {
        this.projectService.getProjects(null, true)
            .then(projects => {
                this.allProjects = projects;
                this.projects = projects;
            });
    }

    onClientChange(client_id: number) {
        this.projects = this.allProjects.filter(p => p.client_id == client_id);
        this.client_id = client_id;
        this.onClientSelected.emit(client_id);
    }

    onProjectChange(project_id: number) {
        this.project_id = project_id;
        this.onProjectSelected.emit(project_id);
    }
    
    ngOnInit() {
        this.getClients();
        this.getProjects();
    }
}