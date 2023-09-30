import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('assets/data.json');
  }

  getProduct() {
    return this.products;
  }

  saveCart(email: string): void {
    localStorage.setItem(email, JSON.stringify(this.products));
  }

  addToCart(addedProduct: any, email: string) {
    console.log("addedProduct", addedProduct)

    this.products.push(addedProduct);
    this.saveCart(email);
  }

  loadCart(email: string): void {
    this.products = JSON.parse(localStorage.getItem(email) as any) || [];
  }

  productInCart(product: any): boolean {
    return this.products.findIndex((x: any) => x.id === product.id) > -1;
  }

  removeProduct(product: any, email: string) {
    const index = this.products.findIndex((x: any) => x.id === product.id);

    if (index > -1) {
      this.products.splice(index, 1);
      this.saveCart(email);
    }
  }

  clearProducts() {
    localStorage.clear();
  }
}
