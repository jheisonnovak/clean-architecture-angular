import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { TaskFormComponent } from "./pages/task-form/task-form.component";
import { TaskListComponent } from "./pages/task-list/task-list.component";
import { TasksStore } from "./stores/tasks.store";
import { TasksRoutingModule } from "./tasks-routing.module";

@NgModule({
	declarations: [TaskListComponent, TaskFormComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		TasksRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		FormsModule,
	],
	providers: [TasksStore],
})
export class TasksModule {}
