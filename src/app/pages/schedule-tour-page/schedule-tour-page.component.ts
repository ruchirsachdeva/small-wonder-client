import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-schedule-tour-page",
  templateUrl: "./schedule-tour-page.component.html",
  styleUrls: ["./schedule-tour-page.component.scss"],
})
export class ScheduleTourPageComponent implements OnInit {
  title: string = "Schedule a tour";
  bgImage: string = "/assets/img/school-building.jpg";
  locationExploreTitle: string = "Pick your Location";

  locationList = [
    {
      title: "Lorem Ipsum",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      addHeader: "Lorem Ipsum",
      address: "212 Baker Street, London",
      phone: "+91 2234908989",
      email: "sample@gmail.com",
    },
    {
      title: "Lorem Ipsum",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      addHeader: "Lorem Ipsum",
      address: "212 Baker Street, London",
      phone: "+91 2234908989",
      email: "sample@gmail.com",
    },
    {
      title: "Lorem Ipsum",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      addHeader: "Lorem Ipsum",
      address: "212 Baker Street, London",
      phone: "+91 2234908989",
      email: "sample@gmail.com",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
