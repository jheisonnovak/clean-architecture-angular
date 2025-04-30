import { Injectable, signal } from "@angular/core";
import { Task } from "../models/interfaces/task.interface";
import { TaskService } from "../services/task.service";

@Injectable()
export class TasksStore {
	tasks = signal<Task[]>([]);

	constructor(private taskService: TaskService) {}

	fetchTasks() {
		this.taskService.getAll().subscribe(tasks => this.tasks.set(tasks));
	}
}
