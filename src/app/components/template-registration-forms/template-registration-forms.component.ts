import { AfterViewInit, Component,ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-template-registration-forms',
  templateUrl: './template-registration-forms.component.html',
  styleUrls: ['./template-registration-forms.component.scss']
})
export class TemplateRegistrationFormsComponent implements AfterViewInit {
@ViewChild('f') form: any;

constructor(private productService: ProductService){

}
ngAfterViewInit(){
  console.log("products: ", this.productService.getProducts())
}
public onclickButton(): void {
  const product: Product = {
    name:"shachar",
    image: "shacha@gns.df",
    price: 12,
    cart: false,
  }
  this.productService.productSubject$.next(product)
}

public onSubmitForm(): void {
  
  if(this.form.valid){
    console.log("form: ",this.form)

  }else{
  console.log("not valid!!",this.form)

  }
}

}
