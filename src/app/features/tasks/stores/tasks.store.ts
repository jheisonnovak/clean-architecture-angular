import { Injectable, signal } from "@angular/core";
import { tap } from "rxjs";
import { Task } from "../models/interfaces/task.interface";
import { TaskService } from "../services/task.service";

@Injectable()
export class TasksStore {
	tasks = signal<Task[]>([]);

	constructor(private taskService: TaskService) {}

	fetchTasks() {
		this.taskService.getAll().subscribe(tasks => this.tasks.set(tasks));
	}

	createTask(task: Task) {
		return this.taskService.create(task).pipe(tap(() => this.fetchTasks()));
	}

	deleteTask(id: number) {
		return this.taskService.deleteById(id).pipe(tap(() => this.fetchTasks()));
	}
}
