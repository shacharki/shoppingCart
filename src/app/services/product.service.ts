import { Injectable } from '@angular/core';
import { Product } from '../components/models/product.interface';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productSubject$: Subject<Product> = new Subject();
  private _products: Product[] = [];

  constructor(private http: HttpClient) {}
  
  getAllProducts() {
    return this.http.get('assets/data.json');
  }

  public getProducts(): Product[] {
    return this._products
  }

  public setProducts(products: Product[]): void {
    this._products = [...this._products, ...products]
  }
}
