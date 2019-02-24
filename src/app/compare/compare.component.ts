import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
// card:any;
  product:any;
  
  constructor(private productsService:ProductsService){

  }

  ngOnInit() {
    this.product=this.productsService.compare;
   
  }

}
