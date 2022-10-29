import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name: string = "";
  public price: number =0;
  public quantity: number=0;

  public carts:any = [
    {name:'pen', price:2400, quantity:3},
    {name:'book', price:2300, quantity:2},
    {name:'flower', price:1200, quantity:5}
  ]


  constructor() { }

  ngOnInit(): void {
  }

  addtocart(){
    let cart = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
    }

    if(this.name != "")
    this.carts.push(cart);
     this.name="";
     this.price = 0;
     this.quantity = 0;

    alert("Add to cart Sucessfully");
  }

     delete(i:number){
    this.carts.splice(i,1);
  }



}
