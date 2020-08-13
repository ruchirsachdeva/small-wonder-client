import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-activity-display",
  templateUrl: "./activity-display.component.html",
  styleUrls: ["./activity-display.component.scss"],
})
export class ActivityDisplayComponent implements OnInit {
  activityName: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.activityName = params.get("name");
    });
  }
}
