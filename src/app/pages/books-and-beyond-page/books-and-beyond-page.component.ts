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

  daySectionTitle: string = "Day at small wonders";

  daySectionContent: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  childrenLearnSectionTitle: string = "What children will learn";
  childrenLearnSectionContent = [
    {
      heading: "Exploring and interacting with the world around them",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      color: "orange",
      bulletPoints: [
        "Linguistic Skills",
        "Mathematical Skills",
        "Science and Environmental education",
      ],
    },
    {
      heading: "Understanding the world we live in",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      color: "violet",
      bulletPoints: ["Cultural Competence", "Ethics Education"],
    },
    {
      heading: "Learning forms of expressions",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      color: "green",
      bulletPoints: [
        "Musical Activities",
        "Crafts & visual expression",
        "Verbal & physical expression",
      ],
    },
    {
      heading: "Practicing a healthy way of living",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      color: "blue",
      bulletPoints: ["Socio-Emotional Competence", "Physical Wellbeing"],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
