import { Routes } from "@angular/router";
import { TaskListComponent } from "./pages/task-list/task-list.component";

export const taskRoutes: Routes = [
	{
		path: "",
		component: TaskListComponent,
	},
];
