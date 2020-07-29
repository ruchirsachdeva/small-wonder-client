import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-carousel-image-section",
  templateUrl: "./carousel-image-section.component.html",
  styleUrls: ["./carousel-image-section.component.scss"],
})
export class CarouselImageSectionComponent implements OnInit {
  @Input() images = [];

  constructor() {}

  ngOnInit() {}
}
