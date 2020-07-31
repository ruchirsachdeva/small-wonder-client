import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-curriculum-section",
  templateUrl: "./home-curriculum-section.component.html",
  styleUrls: ["./home-curriculum-section.component.scss"],
})
export class HomeCurriculumSectionComponent implements OnInit {
  // slides = [342, 453, 846, 855, 234, 564, 744, 243];

  curriculumList = [
    {
      imgSrc: "/assets/img/more-explore-1.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
    {
      imgSrc: "/assets/img/girl-book.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
    {
      imgSrc: "/assets/img/kids-books.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
    {
      imgSrc: "/assets/img/more-explore-1.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
    {
      imgSrc: "/assets/img/girl-book.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
    {
      imgSrc: "/assets/img/kids-books.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: true,
    infinite: false,
  };

  constructor() {}

  ngOnInit() {}

  slickInit(e) {
    console.log("slick initialized");
  }

  breakpoint(e) {
    console.log("breakpoint");
  }

  afterChange(e) {
    console.log("afterChange");
  }

  beforeChange(e) {
    console.log("beforeChange");
  }
}
