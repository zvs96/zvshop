import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  product:any;
  constructor(private productsService:ProductsService){

  }

  ngOnInit() {
    this.product=this.productsService.like;
  }


  addShoping(){

for(let card of this.product){

if(this.productsService.shoppingCart.indexOf(card)==-1){
  card.shopping_cart=!card.shopping_cart;
  this.productsService.numberShopping++;
  this.productsService.priceShopping+=parseInt(card.price.slice(2));
  this.productsService.shoppingCart.push(card);

}

  }


}
}
