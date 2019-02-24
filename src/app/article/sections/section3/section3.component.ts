import { Component, OnInit } from '@angular/core';
import { ProductAddComponent } from '../../../product-add/product-add.component';
import { ProductsService } from '../../../../products.service';
@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component  implements OnInit {
product:any;
  constructor(private productsService:ProductsService){

  }

  ngOnInit() {
    this.product=this.productsService.product;
  }

}
