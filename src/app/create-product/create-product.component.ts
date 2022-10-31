import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  

  public productForm: FormGroup = new FormGroup(

    {
      name: new FormControl(),
      price: new FormControl(),
      expiry: new FormControl(),
      deliveryaddress: new FormGroup(
        {
          hno: new FormControl(),
          city: new FormControl(),
          pin: new FormControl()
        }
        
      ),

        payment: new FormControl(),
        upiid: new FormControl(),
        cardnumber: new FormControl()
    }
  )
 
  



  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.productForm);
  }
}


