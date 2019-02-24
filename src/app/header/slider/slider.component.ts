import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliderTime;
  i:number=0;

  constructor() { }

  ngOnInit() {
    this.slideTime();
  }


  sliderPicsUrl = [
    '../../../assets/images/slider/slide1.jpg',
    '../../../assets/images/slider/slide2.jpg',    
    '../../../assets/images/slider/slide3.jpg',    
    '../../../assets/images/slider/slide4.jpg',    
  ]

  slideTime(){
    this.sliderTime=setInterval(()=>{
    if(this.i==this.sliderPicsUrl.length-1){
      this.i=0;
    }
      else {
        this.i++;
      }
    }
    ,3000);
  }

}
