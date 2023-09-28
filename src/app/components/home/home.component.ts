import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList!: any[];
  products: any[] = [];
  subTotal!: any;
  constructor(
    private product_service: ProductService, 
    private router: Router
  ) { }
  ngOnInit() {
    this.product_service.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {
        console.log("Reqoest Completed");
      },
    })
   
  }

  checkout(){

  }
  addToCart(product: any){

  }

  removeFromCart(product: any) {
   
  }
  get total() {
    return this.products?.reduce(
      (sum, product) => ({
        quantity: 1,
        price: sum.price + product.quantity * product.price,
      }),
      { quantity: 1, price: 0 }
    ).price;
  }
 
}
