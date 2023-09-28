import { Component, Input } from '@angular/core';
import { Product } from '../models/product.interface';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent {
  constructor() { }



  @Input() product!: Product;
  @Input() type!: boolean;

  public addProduct(event: Event): void{    
    // this.product = {
    //   name: 'bread',
    //   price: 15,
    //   image: 'bread image',
    //   cart: false,
    // }
  }
}
