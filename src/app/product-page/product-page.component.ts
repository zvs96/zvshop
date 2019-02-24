import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-page',
  inputs: ["card"],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'] 
})
export class ProductPageComponent implements OnInit {
  card;

  newTitle = 'Yo'

  public constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.card=params;
    })
   }
  ngOnInit() {
      // $("#table > tbody > tr").has('td:empty').hide();
      // $("'.thead-dark' ").parent().hide()
  }

}
