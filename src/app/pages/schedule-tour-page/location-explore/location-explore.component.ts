import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-location-explore",
  templateUrl: "./location-explore.component.html",
  styleUrls: ["./location-explore.component.scss"],
})
export class LocationExploreComponent implements OnInit {
  @Input() title: string = "";
  @Input() locationList = [];

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
}
