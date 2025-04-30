import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TasksStore } from "../../stores/tasks.store";

@Component({
	selector: "app-task-list",
	templateUrl: "./task-list.component.html",
	standalone: false,
})
export class TaskListComponent implements OnInit {
	constructor(public store: TasksStore, private router: Router) {}

	ngOnInit(): void {
		this.store.fetchTasks();
	}

	createTask() {
		this.router.navigate(["/tasks/create"]);
	}
}
