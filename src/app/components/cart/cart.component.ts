import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input() product!: Product;
  @Input() productIndex!: number;
  
@Output() onDeleteProduct: EventEmitter<number> = new EventEmitter();

  public deletProduct(){
    this.onDeleteProduct.emit(this.productIndex)
  }

}
