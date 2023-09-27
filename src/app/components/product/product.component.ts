import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  image: ImageBitmap;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
constructor(){}
ngOnInit(): void {
  console.log("ProductComponent work")
}
}
