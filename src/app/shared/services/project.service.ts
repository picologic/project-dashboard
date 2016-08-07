import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { Project } from "../models";

@Injectable()
export class ProjectService {
    private baseUrl = "/api/projects";

    constructor(private http: Http){ }

    getProjects(client_id?: number, active?: boolean) {
        // search parameters
        let params: URLSearchParams = new URLSearchParams();
        if (active) {
            params.set("active", active.toString());
        }
        if (client_id) {
            params.set("client_id", client_id.toString());
        }

        return this.http.get(this.baseUrl, { search: params })
                   .toPromise()
                   .then(response => response.json() as Project[])
                   .catch(this.handleError);
    }

    handleError(err: any) {
        console.error(err);
        return Promise.reject(err.message || err);
    }
}