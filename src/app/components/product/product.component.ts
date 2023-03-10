import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productList :any
  constructor(private service:ProductService){}
  // when page load ngoninit works
  ngOnInit(){
    this.service.getProducts().subscribe(res=>{
     
      this.productList = res
    })
  }

}
