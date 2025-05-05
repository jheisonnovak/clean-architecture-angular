import { provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [BrowserModule, AppRoutingModule, ToastrModule.forRoot({ progressAnimation: "increasing" })],
	providers: [provideHttpClient(), provideAnimationsAsync()],
	bootstrap: [AppComponent],
})
export class AppModule {}
