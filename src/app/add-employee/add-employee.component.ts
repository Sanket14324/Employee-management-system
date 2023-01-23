import { Component } from '@angular/core';
import { AddNewEmployeeService } from '../add-new-employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee : Employee = new Employee("", "");
  message:any;
  constructor(private service:AddNewEmployeeService){}

  ngOnInit(){

  }

  public addEmployee(){
    let resp = this.service.addNewEmployee(this.employee);
    resp.subscribe((data)=>this.message=data);
  }

}
