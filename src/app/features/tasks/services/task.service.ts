import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Task } from "../models/interfaces/task.interface";

@Injectable()
export class TaskService {
	private apiUrl = `${environment.apiUrl}/task`;

	constructor(private http: HttpClient) {}

	getAll(): Observable<Task[]> {
		return this.http.get<Task[]>(`${this.apiUrl}/find-all`);
	}

	create(task: Task): Observable<void> {
		return this.http.post<void>(`${this.apiUrl}/create`, task);
	}
}
