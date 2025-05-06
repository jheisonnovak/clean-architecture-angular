import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Task } from "../../models/interfaces/task.interface";

@Component({
	selector: "app-task-modal",
	templateUrl: "./task-modal.component.html",
	standalone: false,
})
export class TaskModalComponent implements OnInit {
	taskForm!: FormGroup;
	@Input() isOpen = false;
	@Output() close = new EventEmitter<void>();
	@Output() save = new EventEmitter<any>();

	constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {}

	ngOnInit() {
		this.taskForm = this.formBuilder.group<Partial<Task>>({
			title: "",
			description: "",
		});
	}

	onClose(): void {
		this.close.emit();
	}

	onSubmit(): void {
		if (this.taskForm.valid) {
			this.save.emit(this.taskForm.value);
			this.onClose();
		} else {
			this.toastr.error("Preencha todos os campos obrigatórios!");
		}
	}
}
