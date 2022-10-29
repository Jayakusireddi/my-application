import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public Posts: any = [];
  

  constructor(private _PostService:PostService) {
    this._PostService.getPost().subscribe(
      (data:any)=>{
        this.Posts=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
   }

  ngOnInit(): void {
  }

}
