import { Component, OnInit } from "@angular/core";

import { ClientService, Client, Project, ProjectService } from "../../shared";

@Component({
    moduleId: module.id,
    selector: "pd-project-filter",
    templateUrl: "project-filter.component.html"
})
export class ProjectFilterComponent implements OnInit {
    private allProjects: Project[];
    
    clients: Client[];
    projects: Project[];

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
    }

    onProjectChange(project_id: number) {
        console.log(project_id);
    }
    
    ngOnInit() {
        this.getClients();
        this.getProjects();
    }
}