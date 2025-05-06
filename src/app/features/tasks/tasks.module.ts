import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TaskFormComponent } from "./pages/task-form/task-form.component";
import { TaskListComponent } from "./pages/task-list/task-list.component";
import { TaskService } from "./services/task.service";
import { TasksStore } from "./stores/tasks.store";
import { taskRoutes } from "./tasks.routes";

@NgModule({
	declarations: [TaskListComponent, TaskFormComponent],
	imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(taskRoutes), DragDropModule],
	providers: [TasksStore, TaskService],
})
export class TasksModule {}
