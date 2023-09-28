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
  isProducts: boolean = true;
  constructor(
    private product_service: ProductService, 
    private router: Router
  ) { }
  ngOnInit() {
    this.product_service.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res);
        this.productList = res;
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {
        console.log("Request Completed");
      },
    });
    this.product_service.loadCart();
    this.products = this.product_service.getProduct();
  }

  logout(){
    this.router.navigate(['/login']);

  }
  showCrat(){
    this.isProducts = false
  }
  showProduct(){
    this.isProducts = true
  }
  
  addToCart(product: any){
    if (!this.product_service.productInCart(product)) {
      product.quantity = 1;
      this.product_service.addToCart(product);
      this.products = [...this.product_service.getProduct()];
      this.subTotal = product.price;
    }
  }

  removeFromCart(product: any) {
    this.product_service.removeProduct(product);
    this.products = this.product_service.getProduct();
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
