import { Routes } from "@angular/router";
import { TaskFormComponent } from "./pages/task-form/task-form.component";
import { TaskListComponent } from "./pages/task-list/task-list.component";

export const taskRoutes: Routes = [
	{
		path: "",
		component: TaskListComponent,
	},
	{
		path: "create",
		component: TaskFormComponent,
	},
];
