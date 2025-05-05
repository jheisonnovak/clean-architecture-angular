import { Routes } from "@angular/router";
import { TasksModule } from "./features/tasks/tasks.module";

export const routes: Routes = [
	{
		path: "tasks",
		loadChildren: () => TasksModule,
	},
];
