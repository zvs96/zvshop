import { Component, OnInit } from '@angular/core';
import {start,start1,start2,start3} from '../../_animations/animation'
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-nav',
  animations: [start,start1,start2,start3],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private titleService: Title){}
  
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  onActivate(event){
    window.scroll(0,0)
  }
state:string='go';
state1:string="go1";
imgSrc="../../../assets/images/menu.png";
search;
div1;
close;
flag:boolean=true;
flag2:boolean=true;
  ngOnInit() {


// menu open and close

$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });
  $('#sabMenuId').click(function(){
    $('#nav-icon').toggleClass('open');
    
  })
});

// end


    window.scrollBy(0, 1); //position fixed  միշտ  չի որ  աշխատում   է  դրա  համար գրում ենք դա



this.search=document.getElementById("site_search");
this.div1=document.getElementById("sabmenuP");
this.close=document.getElementById("close");
  }

  startSearch(){
    if(this.flag2)
     {
       //  this.state='togo';
    this.state1="togo1";
    this.search.style.display="block";
    }
    else
    {   
      // this.state='go';
    this.state1='go1';
    setTimeout(()=>{
      if(this.flag)
      this.search.style.display="none"; }, 
    1000
      )}
    this.flag2=!this.flag2;
  }


  startAnime(){
    if(this.flag){
    this.state='togo';
    
 this.imgSrc="../../../assets/images/cancel-music.png";
  this.div1.style.display="block";
  this.close.style.display="block";
    }

else{
  this.imgSrc="../../../assets/images/menu.png";
  this.state='go';
 
  
 this.close.style.display="none";
 this.none();
 
//  this.div1.style.display="none";
}
this.flag=!this.flag;
  }


  none(){setTimeout(()=>{
  if(this.flag)
  this.div1.style.display="none"; }, 
800
  )}
  

}
