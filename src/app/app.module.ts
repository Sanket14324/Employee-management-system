import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { AddNewEmployeeService } from './add-new-employee.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    HomeComponent,
    LoginComponent,
    UpdateEmployeeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AddNewEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
