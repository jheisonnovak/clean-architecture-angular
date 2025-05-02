import { Component, OnInit } from "@angular/core";
import { TasksStore } from "../../stores/tasks.store";

@Component({
	selector: "app-task-list",
	templateUrl: "./task-list.component.html",
	standalone: false,
})
export class TaskListComponent implements OnInit {
	constructor(public store: TasksStore) {}

	ngOnInit(): void {
		this.store.fetchTasks();
	}
}
