import { Component, OnInit, Injectable } from '@angular/core';
import { AddNewEmployeeService } from '../add-new-employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  name :  any;
  employees : any;
  
  constructor(private service:AddNewEmployeeService){
    
  }

  public deleteEmployee(id:number){
    let resp = this.service.deleteEmployee(id);
    resp.subscribe((data) => this.employees = data)
  }

  public findEmployeeByName(name:string) {
    let resp = this.service.getEmployeeByName(name);
    resp.subscribe((data) => this.employees = data);
  }

 
  public storeID(id:number){
    this.service.storeID(id);
  }


  ngOnInit(): void {
    let resp= this.service.getAllEmployee();
    resp.subscribe((data) => this.employees=data);
  }




  

}
