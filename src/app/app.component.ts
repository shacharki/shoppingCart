import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoppingCart';
  shoulDisplayProduct: boolean = true;

public observable: Observable<any> = new Observable((observer)=>{
  
})

  toggleProductComponent() {
    this.shoulDisplayProduct = !this.shoulDisplayProduct;
  }
}
