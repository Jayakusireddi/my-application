import { Component, OnInit } from '@angular/core';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent implements OnInit {

  public activity:any = [];

  constructor(private _boredomService:BoredomService) {

    this._boredomService.getActivity().subscribe(
      (data:any)=>{
        this.activity = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
   }

  ngOnInit(): void {
  }

}
