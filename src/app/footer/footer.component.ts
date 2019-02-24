import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  
  onActivate(event){
    setTimeout(() => {
      window.scroll(0,100)
    }, 200);
  }  

  ngOnInit() {

    $(document).ready(function(){
      
      $('.scrollToTop button').click(function(){
          $('html, body').animate({scrollTop : 0},800);
          return false;
      });
  
  });
  }
}
