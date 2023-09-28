import { Component, Input, OnInit, SimpleChanges, OnChanges, AfterViewInit, OnDestroy } from '@angular/core'
import { Product } from '../models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.components.html',
    styleUrls: ['./products.components.scss']

})

export class ProductsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    title = 'Shopping Cart:';
    constructor(private productService: ProductService) {

    }

    public products: Product[] = [];

    public listOfProducts: Product[] = [
        {
            name: 'bread',
            price: 15,
            image: 'bread image',
            cart: false
        },
        {
            name: 'cookies',
            price: 29.9,
            image: 'cookies image',
            cart: false
        },
        {
            name: 'milk',
            price: 6.5,
            image: 'milk image',
            cart: false
        }
    ]

    public deleteProduct(productIndex: number): void {
        this.listOfProducts
        //      this.listOfProducts = {
        //   name: 'bread',
        //   price: 15,
        //   image: 'bread image',
        //   cart: false,
        // }

    }
    ngOnInit() {
        console.log("befor", this.productService.getProducts())
        this.productService.setProducts(this.listOfProducts)
        console.log("after", this.productService.getProducts())
        this.products = this.productService.getProducts()
        this.productService.productSubject$.subscribe(data=>{
            this.products.push(data);
        })
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    }

    ngAfterViewInit() {
    }

    ngOnDestroy(): void {
    }
}