import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-activities-page",
  templateUrl: "./activities-page.component.html",
  styleUrls: ["./activities-page.component.scss"],
})
export class ActivitiesPageComponent implements OnInit {
  title: string = "Activities";
  bgImage: string ="/assets/img/activities_cover.jpg";

  testimonialList = [
    {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      name: "Barry Allen",
      designation: "Vulputate",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      name: "Kevin Smith",
      designation: "Vulputate",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      name: "John Doe",
      designation: "Vulputate",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      name: "Barry Allen",
      designation: "Vulputate",
      imgSrc: "/assets/img/sampleParent.png",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
