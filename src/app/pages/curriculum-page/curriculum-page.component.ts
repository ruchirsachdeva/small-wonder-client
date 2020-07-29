import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-curriculum-page",
  templateUrl: "./curriculum-page.component.html",
  styleUrls: ["./curriculum-page.component.scss"],
})
export class CurriculumPageComponent implements OnInit {
  image = "/assets/img/aboutUs.jpg";

  constructor() {}

  ngOnInit() {}
}
