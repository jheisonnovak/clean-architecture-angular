import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TaskColumnComponent } from "./components/task-column-component/task-column.component";
import { TaskDropListComponent } from "./components/task-drop-list.component.ts/task-drop-list.component";
import { TaskListComponent } from "./pages/task-list/task-list.component";
import { TaskModalComponent } from "./pages/task-modal/task-modal.component";
import { TaskService } from "./services/task.service";
import { TasksStore } from "./stores/tasks.store";
import { taskRoutes } from "./tasks.routes";

@NgModule({
	declarations: [TaskListComponent, TaskModalComponent, TaskColumnComponent, TaskDropListComponent],
	imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(taskRoutes), DragDropModule],
	providers: [TasksStore, TaskService],
})
export class TasksModule {}
