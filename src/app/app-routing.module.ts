import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksModule } from "./features/tasks/tasks.module";

const routes: Routes = [
	{
		path: "tasks",
		loadChildren: () => TasksModule,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
