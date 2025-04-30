import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	standalone: false,
})
export class HeaderComponent {
	constructor(private router: Router) {}

	goToTasks() {
		this.router.navigate(["/tasks"]);
	}
}
