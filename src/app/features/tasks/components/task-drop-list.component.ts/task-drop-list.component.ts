import { CdkDropList } from "@angular/cdk/drag-drop";
import { Component, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Task } from "../../models/interfaces/task.interface";
import { TasksStore } from "../../stores/tasks.store";

@Component({
	selector: "task-drop-list",
	templateUrl: "./task-drop-list.component.html",
	styleUrls: ["./task-drop-list.component.css"],
	standalone: false,
})
export class TaskDropListComponent extends CdkDropList {
	@Input() listData: Task[] = [];

	constructor(private store: TasksStore, private toastr: ToastrService) {
		super();
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
}
