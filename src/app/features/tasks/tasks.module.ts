import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TaskListComponent } from "./pages/task-list/task-list.component";
import { TasksStore } from "./stores/tasks.store";
import { TasksRoutingModule } from "./tasks-routing.module";

@NgModule({
	declarations: [TaskListComponent],
	imports: [CommonModule, ReactiveFormsModule, TasksRoutingModule],
	providers: [TasksStore],
})
export class TasksModule {}
