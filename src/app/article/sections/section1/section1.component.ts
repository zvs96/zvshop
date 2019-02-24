import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { ProductAddComponent } from '../../../product-add/product-add.component';
import { ProductsService } from '../../../../products.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component  implements OnInit {
product:any;
  constructor(private productsService:ProductsService){

  }

  ngOnInit() {
    this.product=this.productsService.product;
  }

}
