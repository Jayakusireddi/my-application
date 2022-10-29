import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name:string = "hellow darling jay";
  public city:string = "HYDERABAD"

  public dob:string = "11-10-1998"
  public today:Date = new Date();

  public user:any = {name:'JAY', phone:3333};

  public price:number= 1000;
  public age:number = 33;
  public marks: number = 90;

  constructor() { }

  ngOnInit(): void {
  }

}
