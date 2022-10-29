import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  public name: string = "";
  public age: number =0;
  public company: string = "";
  public package: number =0;

  public employees:any = [
    {name:'sai', age:24, company:'tcs', package:8, hike:20},
    {name:'jay', age:18, company:'hcl', package:5, hike:30},
    {name:'ganeh', age:23, company:'ibm', package:10, hike:40},

  ]

  constructor() { }

  ngOnInit(): void {

  }

  register(){
    let employee = {
      name: this.name,
      age: this.age,
      company:this.company,
      package:this.package
    }
    if(this.name != "")
this.employees.push(employee);

this.name="";
this.age = 0;
this.company = "";
this.package = 0;

alert("Registred Sucessfully");
  }

  delete(i:number){
    this.employees.splice(i,1)
  }
}
