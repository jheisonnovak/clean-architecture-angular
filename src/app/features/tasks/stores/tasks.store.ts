import { Injectable, signal } from "@angular/core";
import { tap } from "rxjs";
import { TaskStatusEnum } from "../models/enums/task-status.enum";
import { Task } from "../models/interfaces/task.interface";
import { TaskService } from "../services/task.service";

@Injectable()
export class TasksStore {
	tasks = signal<Task[]>([]);
	pendingTasks = signal<Task[]>([]);
	doingTasks = signal<Task[]>([]);
	doneTasks = signal<Task[]>([]);

	constructor(private taskService: TaskService) {}

	fetchTasks() {
		this.taskService.getAll().subscribe(tasks => {
			this.tasks.set(tasks);
			this.pendingTasks.set(tasks.filter(task => task.status === TaskStatusEnum.PENDING));
			this.doingTasks.set(tasks.filter(task => task.status === TaskStatusEnum.DOING));
			this.doneTasks.set(tasks.filter(task => task.status === TaskStatusEnum.DONE));
		});
	}

	createTask(task: Task) {
		return this.taskService.create(task).pipe(tap(() => this.fetchTasks()));
	}

	deleteTask(id: number) {
		return this.taskService.deleteById(id).pipe(tap(() => this.fetchTasks()));
	}

	updateTaskStatus(id: number, status: TaskStatusEnum) {
		return this.taskService.updateStatusById(id, status).pipe(tap(() => this.fetchTasks()));
	}
}
