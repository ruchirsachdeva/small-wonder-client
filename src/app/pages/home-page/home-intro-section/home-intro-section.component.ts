import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-intro-section',
  templateUrl: './home-intro-section.component.html',
  styleUrls: ['./home-intro-section.component.scss']
})
export class HomeIntroSectionComponent implements OnInit {

  // $('.slider-for').slick({
  slideConfig_for = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  }
  // });
  //   $('.slider-nav').slick({
  slideConfig_nav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: "<div class='nav-btn next-slide'></div>",
    // prevArrow: "<div class='nav-btn prev-slide'></div>",
    asNavFor: '.slider-for'
    
    // centerMode: true,
    // focusOnSelect: true
  };

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    // centerMode: true,
  };

  branchList = [
    {
      imgSrc: "/assets/img/philosophy.png",
      title: "Our Philosophy"
    },
    {
      imgSrc: "/assets/img/team.png",
      title: "Meet Our Team"
    },
    {
      imgSrc: "/assets/img/admission.png",
      title: "Admissions"
    },
    {
      imgSrc: "/assets/img/philosophy.png",
      title: "Our Philosophy1"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  afterChange(e) {
    // debugger;
  }
}
