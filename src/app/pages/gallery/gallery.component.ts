import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery'; // Import jQuery and use its typings

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  image='../../../assets/image/Maskgroup.png'

  @Input() showCount= false


  constructor() { }

  galleryData: Item[] = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '1'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642670310920-6f4e3a3adee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      imageAlt: '2'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642570517818-99c0fd6f0349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      imageAlt: '3'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642649149963-0ef6779df6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '4'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642618215095-3523a9a36893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      imageAlt: '5'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642628658566-1db49cadf78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      imageAlt: '6'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '7'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80',
      imageAlt: '8'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      imageAlt: '9'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '10'
    },
    // {
    //   imageSrc: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    //   imageAlt: '11'
    // },
    // {
    //   imageSrc: 'https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    //   imageAlt: '12'
    // }
  ]

  previewImage: boolean=false;
  showMask:boolean= false;
  currentLightBoxImage: Item=this.galleryData[0]
  currentItem=0;
  controls: boolean= true; 
  totalImageCount=0;


  ngOnInit(): void {
    this.totalImageCount= this.galleryData.length;

    $(document).ready(function() {
      // Your jQuery code here
    });
  }

  onPreviewImage(index: number): void {
    this.showMask= true;
    // console.log(event);
    this.previewImage= true;
    this.currentItem= index
    this.currentLightBoxImage= this.galleryData[index]
    
  }
  closePreview(){
    this.previewImage= false
    this.showMask=false
  }

  next():void {
    this.currentItem= this.currentItem+1
    if(this.currentItem> this.galleryData.length - 1){
      this.currentItem=0
    }
    this.currentLightBoxImage=this.galleryData[this.currentItem]
  }
  prev():void {
    this.currentItem= this.currentItem-1
    if(this.currentItem< 0){
      this.currentItem= this.galleryData.length - 1
    }
    this.currentLightBoxImage=this.galleryData[this.currentItem]
  }

}
