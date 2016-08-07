import { Injectable } from "@angular/core";

import { Client } from "../models";

@Injectable()
export class ClientService {
    clients: Client[] = [
        { id: 1, name: "Point B" },
        { id: 2, name: "Microsoft" }
    ];

    getClients() {
        return Promise.resolve(this.clients);
    }
}