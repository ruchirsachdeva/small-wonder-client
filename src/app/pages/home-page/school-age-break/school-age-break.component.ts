import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-school-age-break",
  templateUrl: "./school-age-break.component.html",
  styleUrls: ["./school-age-break.component.scss"],
})
export class SchoolAgeBreakComponent implements OnInit {
  @Input() schoolAgeBreakList = [];

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
}
