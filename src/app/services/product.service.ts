import { Injectable } from '@angular/core';
import { Product } from '../components/models/product.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productSubject$: Subject<Product> = new Subject();
  private _products: Product[] = [];
  constructor() { }

  public getProducts(): Product[] {
    return this._products
  }

  public setProducts(products: Product[]): void {
    this._products = [...this._products, ...products]
  }
}
