import { CdkDropList } from "@angular/cdk/drag-drop";
import { Component, ContentChild, Input } from "@angular/core";

@Component({
	selector: "task-column",
	templateUrl: "./task-column.component.html",
	standalone: false,
})
export class TaskColumnComponent {
	@Input() title: string = "";
	@ContentChild(CdkDropList) dropList!: CdkDropList;

	constructor() {}
}
