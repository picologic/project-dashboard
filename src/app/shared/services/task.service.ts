import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { Task } from "../models";

@Injectable()
export class TaskService {
    private baseUrl = "/api/projects/";

    constructor(private http: Http) { }

    getTasks(project_id: number) {
        let url = this.baseUrl + project_id.toString() + "/tasks";
        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json() as Task[])
                   .catch(this.handleError);
    }

    handleError(err: any) {
        console.error(err);
        return Promise.reject(err.message || err);
    }
}