import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { LoginComponent } from "./login.component";
import {ButtonModule} from 'primeng/button';
import { MessageService } from "primeng/api";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
      CardModule,
      InputTextModule,
      ButtonModule,
      ReactiveFormsModule
  ],
  providers: [ MessageService]
})
export class LoginModule { }
