import { Component, Input, OnInit, SimpleChanges,OnChanges,AfterViewInit,OnDestroy } from '@angular/core'
import { Product } from '../models/product.interface';

@Component({
    selector: 'app-products',
    templateUrl: './products.components.html',
    styleUrls: ['./products.components.scss']

})

export class ProductsComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy {
    title = 'Shopping Cart:';
    public listOfProducts: Product[] =[
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
    

    ngOnInit() {
        console.log("Products on init")
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    }

    ngAfterViewInit() {
        console.log("after view init")
    }

    ngOnDestroy(): void {
        console.log("On Destroy")
    }
}