import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
})
export class HistoryComponent implements OnInit {
  text: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  imageList = [];
  accordionData = [];

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

    this.accordionData = [
      {
        id: 1,
        header: "Lorem Ipsum",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      },
      {
        id: 2,
        header: "Lorem Ipsum",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      },
      {
        id: 3,
        header: "Lorem Ipsum",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      },
      {
        id: 4,
        header: "Lorem Ipsum",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      },
      {
        id: 5,
        header: "Lorem Ipsum",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      },
    ];
  }
}
