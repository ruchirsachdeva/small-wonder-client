import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-activity-display",
  templateUrl: "./activity-display.component.html",
  styleUrls: ["./activity-display.component.scss"],
})
export class ActivityDisplayComponent implements OnInit {
  activityName: string = "";
  activityImageList = [
    "/assets/img/kids_race.jpg",
    "/assets/img/kids_stage.jpg",
    "/assets/img/kids_yoga.jpg",
  ];
  slideConfig = {
    slidesToShow: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: true,
    infinite: true,
    centerMode: true,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.activityName = params.get("name");
    });
  }
}
