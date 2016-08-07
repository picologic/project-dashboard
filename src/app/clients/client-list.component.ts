import { Component, Input } from "@angular/core";

import { Client } from "../shared";

@Component({
    moduleId: module.id,
    selector: 'pd-client-list',
    templateUrl: 'client-list.component.html'
})
export class ClientListComponent {
    @Input()
    clients: Client[]
}