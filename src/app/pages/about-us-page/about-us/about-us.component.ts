import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUSComponent implements OnInit {
  text: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  aboutUsItems = [
    { value: 555, info: "Lorem Ipsum" },
    { value: 544, info: "Lorem Ipsum dolor sit amet" },
    { value: 544, info: "Lorem Ipsum" },
    { value: 544, info: "Lorem Ipsum dolor sit amet" },
  ];

  imageList = [];

  constructor() {}

  ngOnInit() {
    this.imageList = [
      {
        imageUrl: "/assets/img/more-explore-1.png",
        text: "Lorem Ipsum",
      },
      {
        imageUrl: "/assets/img/more-explore-2.png",
        text: "Lorem Ipsum",
      },
      {
        imageUrl: "/assets/img/more-explore-3.png",
        text: "Lorem Ipsum",
      },
      {
        imageUrl: "/assets/img/more-explore-1.png",
        text: "Lorem Ipsum",
      },
    ];
  }
}
