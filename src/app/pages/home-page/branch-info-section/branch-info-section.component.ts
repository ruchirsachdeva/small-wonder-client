import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'; 

@Component({
  selector: "app-branch-info-section",
  templateUrl: "./branch-info-section.component.html",
  styleUrls: ["./branch-info-section.component.scss"],
})
export class BranchInfoSectionComponent implements OnInit {
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: false,
    infinite: false,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1000, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  branchList = [
    {
      imgSrc: "/assets/img/face1.png",
      title: "Small Wonders Kindergarten",
      address: "L-301, model town, panipat",
      subText: "Know More",
      showArrow: "true",
    },
    {
      imgSrc: "/assets/img/logo2.png",
      title: "Small Wonders World School",
      address: "B block tdi city sector 39, panipat",
      subText: "Know More",
      showArrow: "true",
    },
    {
      imgSrc: "/assets/img/face2.png",
      title: "Small Wonders Toddlers",
      address: "",
      subText: "(Coming Soon)",
      showArrow: "",
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  slickInit(e) {
    console.log("slick initialized");
  }

  goToSchedulePage(){
    this.router.navigateByUrl('/schedule-tour');
  }

}
