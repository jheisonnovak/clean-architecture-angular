import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Task } from "../../models/interfaces/task.interface";
import { TasksStore } from "../../stores/tasks.store";

@Component({
	selector: "app-task-form",
	templateUrl: "./task-form.component.html",
	standalone: false,
})
export class TaskFormComponent implements OnInit {
	taskForm!: FormGroup;

	constructor(public store: TasksStore, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {}

	ngOnInit() {
		this.taskForm = this.formBuilder.group<Partial<Task>>({
			title: "",
			description: "",
		});
	}

	onSubmit() {
		if (this.taskForm.valid) {
			const newTask: Task = this.taskForm.value;
			this.store.createTask(newTask).subscribe({
				next: response => {
					this.taskForm.reset();
					this.router.navigate(["/tasks"]);
					this.toastr.success(response.message, "Sucesso");
				},
				error: error => {
					this.toastr.error(error.message, "Erro");
				},
			});
		} else {
			this.toastr.error("Preencha todos os campos obrigatórios!", "Erro");
		}
	}
}
