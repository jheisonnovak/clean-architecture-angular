import { provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { HeaderComponent } from "./presentation/layout/header/header.component";

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [BrowserModule, RouterModule.forRoot(routes), ToastrModule.forRoot({ progressAnimation: "increasing" })],
	providers: [provideHttpClient(), provideAnimationsAsync()],
	bootstrap: [AppComponent],
})
export class AppModule {}
