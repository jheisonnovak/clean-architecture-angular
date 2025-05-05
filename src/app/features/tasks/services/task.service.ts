import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { IResponse } from "../../../shared/interfaces/response.interface";
import { Task } from "../models/interfaces/task.interface";

@Injectable()
export class TaskService {
	private apiUrl = `${environment.apiUrl}/task`;

	constructor(private http: HttpClient) {}

	getAll(): Observable<Task[]> {
		return this.http.get<Task[]>(`${this.apiUrl}/find-all`);
	}

	create(task: Task): Observable<IResponse<unknown>> {
		return this.http.post<IResponse<unknown>>(`${this.apiUrl}/create`, task);
	}

	deleteById(id: number): Observable<IResponse<unknown>> {
		return this.http.delete<IResponse<unknown>>(`${this.apiUrl}/delete/${id}`);
	}
}
