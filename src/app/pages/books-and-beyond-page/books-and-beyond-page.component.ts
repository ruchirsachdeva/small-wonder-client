import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books-and-beyond-page",
  templateUrl: "./books-and-beyond-page.component.html",
  styleUrls: ["./books-and-beyond-page.component.scss"],
})
export class BooksAndBeyondPageComponent implements OnInit {
  title: string = "Books & Beyond";
  envSectionTitle: string = "Learning Environment";
  contentList = [
    {
      heading: "Inspiring and highly-trained teachers",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      heading: "Safe havens for learning",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      heading: "Mixed age groups",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      heading: "Rich language environment",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  introSectionTitle: string = "Learning happens everywhere";
  introSectionContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  introSectionContentList = [
    {
      heading: "Children Learn while They Play",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      heading: "Learning by Exploring",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
