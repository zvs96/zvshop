import { Component, OnInit } from '@angular/core';
import { ProductAddComponent } from '../../../product-add/product-add.component';
import { ProductsService } from '../../../../products.service';
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component  implements OnInit {
product:any;
  constructor(private productsService:ProductsService){

  }

  ngOnInit() {
    this.product=this.productsService.product;
  }

}
