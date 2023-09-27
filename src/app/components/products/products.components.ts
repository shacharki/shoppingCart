import { Component, Input, OnInit, SimpleChanges,OnChanges,AfterViewInit,OnDestroy } from '@angular/core'

@Component({
    selector: 'app-products',
    templateUrl: './products.components.html',
    styleUrls: ['./products.components.scss']

})

export class ProductsComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy {
    title = 'Products work!';
    @Input() listOfProducts: string[] | undefined
    

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