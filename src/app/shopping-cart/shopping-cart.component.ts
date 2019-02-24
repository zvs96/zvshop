import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  product:any;
 
  constructor(private productsService:ProductsService){

  }

  ngOnInit() {
    this.product=this.productsService.shoppingCart;
  
  }

}
