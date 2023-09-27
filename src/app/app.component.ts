import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoppingCart';
  shoulDisplayProduct: boolean = true;

  toggleProductComponent() {
    this.shoulDisplayProduct = !this.shoulDisplayProduct;
  }
}
