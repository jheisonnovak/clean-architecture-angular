import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TaskFormComponent } from "./pages/task-form/task-form.component";
import { TaskListComponent } from "./pages/task-list/task-list.component";
import { TaskService } from "./services/task.service";
import { TasksStore } from "./stores/tasks.store";
import { TasksRoutingModule } from "./tasks-routing.module";

@NgModule({
	declarations: [TaskListComponent, TaskFormComponent],
	imports: [CommonModule, ReactiveFormsModule, TasksRoutingModule],
	providers: [TasksStore, TaskService],
})
export class TasksModule {}
