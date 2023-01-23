import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"add", component:AddEmployeeComponent},
  {path:"home", component:HomeComponent},
  {path:"update", component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
