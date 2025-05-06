import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { TaskStatusEnum } from "../../models/enums/task-status.enum";
import { CreateTask } from "../../models/interfaces/create-task.interface";
import { TasksStore } from "../../stores/tasks.store";

@Component({
	selector: "app-task-list",
	templateUrl: "./task-list.component.html",
	standalone: false,
})
export class TaskListComponent implements OnInit {
	protected taskStatusEnum = TaskStatusEnum;
	showModal = false;
	constructor(public store: TasksStore, private toastr: ToastrService) {}

	ngOnInit(): void {
		this.store.fetchTasks();
	}

	openModal(): void {
		this.showModal = true;
	}

	closeModal(): void {
		this.showModal = false;
	}

	createTask(task: CreateTask) {
		this.store.createTask(task).subscribe({
			next: response => {
				this.toastr.success(response.message);
			},
			error: error => {
				this.toastr.error(error.error.message);
			},
		});
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

	drop(event: CdkDragDrop<any[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
			this.store.updateTaskStatus(event.container.data[event.currentIndex].id, event.container.id as TaskStatusEnum).subscribe({
				next: response => {
					this.toastr.success(response.message, undefined, { timeOut: 1000 });
				},
				error: error => {
					transferArrayItem(event.container.data, event.previousContainer.data, event.currentIndex, event.previousIndex);
					this.toastr.error(error.error.message, undefined, { timeOut: 1500 });
				},
			});
		}
	}
}
