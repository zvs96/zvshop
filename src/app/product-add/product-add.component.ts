import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { FormControl } from '@angular/forms';
import * as $ from 'jquery'
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  isOptional = false;
   i:any=0;




  img: '../../assets/images/mobile/s9.png';
  company='';
  model='';
  price;
  version= '';
  year;
  os='';
  screenType= '';
  screenResolution= '';
  screenSize= '';
  frontCamera= '';
  mainCamera='';
  numberOfProcessorCores= '';
  cpu= '';
  ram= '';
  memoryCardSlot= '';
  memory= '';
  standartNetwork= '';
  accessToTheInternet= '';
  networkRangeLte4G= '';
  gps= '';
  bluetooth='';
  wifiNetwork='';
  network3G= '';
  nfc= '';
  networkLte4G= '';
  charingConnectorType= '';
  talkTime= '';
  batteryType= '';
  batteryCapacity= '';
  weight= '';
  thickness= '';
  height= '';
  width= '';
  audio= '';
  simCardQuantity= '';

  addCard={
    shopping_cart:true,
    compare:true,
    like: true,
    img:'../../assets/images/mobile/s9.png',
       company: this.company,
       model: this.model,
       price: this.price,
       version: this.version,
       year: this.year,
       os: this.os,
       screenType: this.screenType,
       screenResolution: this.screenResolution,
       screenSize: this.screenSize,
       frontCamera: this.frontCamera,
       mainCamera: this.mainCamera,
       numberOfProcessorCores: this.numberOfProcessorCores,
       cpu: this.cpu,
       ram: this.ram,
       memoryCardSlot: this.memoryCardSlot,
       memory: this.memory,
       standartNetwork: this.standartNetwork,
       accessToTheInternet: this.accessToTheInternet,
       networkRangeLte4G: this.networkRangeLte4G,
       gps: this.gps,
       bluetooth: this.bluetooth,
       wifiNetwork: this.wifiNetwork,
       network3G: this.network3G,
       nfc: this.nfc,
       networkLte4G: this.networkLte4G,
       charingConnectorType: this.charingConnectorType,
       talkTime: this.talkTime,
       batteryType: this.batteryType,
       batteryCapacity: this.batteryCapacity,
       weight: this.weight,
       thickness: this.thickness,
       height: this.height,
       width: this.width,
       audio: this.audio,
       simCardQuantity: this.simCardQuantity,
    
  };


  constructor(private _formBuilder: FormBuilder,private productsService:ProductsService) {}
  
  years:number[] = [];
  opSystems:string[] = [];
  rams:number[] = [0.5];
  memoryList:number[] = [];
  accessInet = new FormControl();
  accessInetList: string[] = [];
  simCards: number[] = [];
  audioL = new FormControl();
  audioList:string[] = [];
  companyList:string[] = [];


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
  //    firstCtrl0: ['', Validators.required],
      firstCtrl1: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
      firstCtrl3: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      // secondCtrl: ['', Validators.required],

    });
  
    for(let i=2018;i>=2001;i--){
      this.years.push(i);
    }
    for(let i=1;i<=16;i++){
      this.rams.push(i)
    }
    this.opSystems.push('Android','iOS','Windows');
    this.memoryList.push(4,8,10,16,32,64,128,256);
    this.accessInetList.push('GPRS','EDGE');
    this.simCards.push(1,2,3)
    this.audioList.push('MP3','M4A','3GA','AAC','OGG','OGA','WAV','WMA','AMR','AWB','FLAC','MID','MIDI','XFM','MXMF','IMY','RTTTL','RTX','OTA','DFF','DSF','APE')
    this.companyList.push('Samsung','Apple','Lenovo','Nokia','Motorola','HTC','Microsoft','Sony','Micromax','Fly','LG')
  
  





   
  
  }  







  add(){
 
      
    this.productsService.product[this.i].push( {

       img:'../../assets/images/mobile/s9.png',
       company: this.company,
       model: this.model,
       price: this.price,
       version: this.version,
       year: this.year,
       os: this.os,
       screenType: this.screenType,
       screenResolution: this.screenResolution,
       screenSize: this.screenSize,
       frontCamera: this.frontCamera,
       mainCamera: this.mainCamera,
       numberOfProcessorCores: this.numberOfProcessorCores,
       cpu: this.cpu,
       ram: this.ram,
       memoryCardSlot: this.memoryCardSlot,
       memory: this.memory,
       standartNetwork: this.standartNetwork,
       accessToTheInternet: this.accessToTheInternet,
       networkRangeLte4G: this.networkRangeLte4G,
       gps: this.gps,
       bluetooth: this.bluetooth,
       wifiNetwork: this.wifiNetwork,
       network3G: this.network3G,
       nfc: this.nfc,
       networkLte4G: this.networkLte4G,
       charingConnectorType: this.charingConnectorType,
       talkTime: this.talkTime,
       batteryType: this.batteryType,
       batteryCapacity: this.batteryCapacity,
       weight: this.weight,
       thickness: this.thickness,
       height: this.height,
       width: this.width,
       audio: this.audio,
       simCardQuantity: this.simCardQuantity,
    })
    
    

    }



}
