import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { TaskStatusEnum } from "../../models/enums/task-status.enum";
import { TasksStore } from "../../stores/tasks.store";

@Component({
	selector: "app-task-list",
	templateUrl: "./task-list.component.html",
	standalone: false,
})
export class TaskListComponent implements OnInit {
	protected taskStatusEnum = TaskStatusEnum;
	constructor(public store: TasksStore, private toastr: ToastrService) {}

	ngOnInit(): void {
		this.store.fetchTasks();
	}

	deleteTask(id: number) {
		this.store.deleteTask(id).subscribe({
			next: response => {
				this.toastr.success(response.message);
			},
			error: error => {
				this.toastr.error(error.error.message);
			},
		});
	}

	updateTaskStatus(id: number, status: TaskStatusEnum) {
		this.store.updateTaskStatus(id, status).subscribe({
			next: response => {
				this.toastr.success(response.message);
			},
			error: error => {
				this.toastr.error(error.error.message);
			},
		});
	}
}
