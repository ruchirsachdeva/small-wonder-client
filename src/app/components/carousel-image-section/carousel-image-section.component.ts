import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel-image-section",
  templateUrl: "./carousel-image-section.component.html",
  styleUrls: ["./carousel-image-section.component.scss"],
})
export class CarouselImageSectionComponent implements OnInit {
  images = [];

  constructor() {}

  ngOnInit() {
    this.images = [944, 1011, 984].map(
      (n) => `https://picsum.photos/id/${n}/1400/500`
    );
  }
}
