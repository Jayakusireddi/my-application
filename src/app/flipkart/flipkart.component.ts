import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {

  public products:any = [];

  constructor(private _flipkartService:FlipkartService) {
    this._flipkartService.getProducts().subscribe(
      (data:any)=>{
        this.products = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
   }

  ngOnInit(): void {
  }

}
