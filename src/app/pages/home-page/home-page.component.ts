import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  images = [];

  curriculumList = [
    {
      imgSrc: "/assets/img/more-explore-1.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
    {
      imgSrc: "/assets/img/girl-book.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
    {
      imgSrc: "/assets/img/kids-books.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
    {
      imgSrc: "/assets/img/more-explore-1.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
    {
      imgSrc: "/assets/img/girl-book.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
    {
      imgSrc: "/assets/img/kids-books.png",
      title: "Title here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
  ];

  eventList = [
    {
      imgSrc: "/assets/img/more-explore-2.png",
      title: "Event title goes here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      date: "November 07, 2019",
      numComments: 4,
    },
    {
      imgSrc: "/assets/img/event-2.png",
      title: "Event title goes here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      date: "November 07, 2019",
      numComments: 5,
    },
    {
      imgSrc: "/assets/img/event-3.png",
      title: "Event title goes here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      date: "November 07, 2019",
      numComments: 1,
    },
    {
      imgSrc: "/assets/img/more-explore-2.png",
      title: "Event title goes here",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
      date: "November 07, 2019",
      numComments: 2,
    },
  ];

  schoolAgeBreakList = [
    {
      title: "Preschool",
      ageRange: "18 months - 3 years",
      imgSrc: "/assets/img/more-explore-1.png",
    },
    {
      title: "Kindergarten",
      ageRange: "3 - 6 years",
      imgSrc: "/assets/img/more-explore-2.png",
    },
    {
      title: "Middle School",
      ageRange: "6 - 10 years",
      imgSrc: "/assets/img/more-explore-3.png",
    },
    {
      title: "High School",
      ageRange: "10 - 16 years",
      imgSrc: "/assets/img/more-explore-2.png",
    },
  ];

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
