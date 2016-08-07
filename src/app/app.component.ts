import { Component, OnInit } from "@angular/core";

import { ClientListComponent } from "./clients/client-list.component";
import { ClientService, Client } from "./shared"

@Component({
  moduleId: module.id,
  selector: 'pd-app',
  templateUrl: 'app.component.html',
  directives: [
      ClientListComponent
  ],
  providers: [
      ClientService
  ]
})
export class AppComponent implements OnInit { 
    clients: Client[] = [];
    constructor(private clientService: ClientService) { }

    getClients() {
        this.clientService.getClients()
            .then(clients => this.clients = clients);
    }

    ngOnInit() {
        this.getClients();
    }
}