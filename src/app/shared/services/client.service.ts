import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { Client } from "../models";

@Injectable()
export class ClientService {
    private baseUrl = "/api/clients";

    constructor(private http: Http){ }

    getClients(active?: boolean) {
        let params: URLSearchParams = new URLSearchParams();
        if (active) {
            params.set("active", active.toString());
        }
        return this.http.get(this.baseUrl, { search: params })
                   .toPromise()
                   .then(response => response.json() as Client[])
                   .catch(this.handleError);
    }

    handleError(err: any) {
        console.error(err);
        return Promise.reject(err.message || err);
    }
}