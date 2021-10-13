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
      title: "ESTABLISHING A LOVE FOR LEARNING",
      content: ``,
      ageInterval: '2-5 years',
      routePath: `curriculum`
    },
    {
      imgSrc: "/assets/img/girl-book.png",
      title: "CHALLENGING EVERY CHILD",
      content: ``,
      ageInterval: '5-7 years',
      routePath: `curriculum`
    },
    {
      imgSrc: "/assets/img/kids-books.png",
      title: "FOCUSING ON THE WHOLE CHILD",
      content: ``,
      ageInterval: '7-9 years',
      routePath: `curriculum`
    },
    {
      imgSrc: "/assets/img/more-explore-1.png",
      title: "SUSTAINING MOMENTUM",
      content: ``,
      ageInterval: '9+',
      routePath: `curriculum`
    }
  ];

  eventList = [
    {
      imgSrc: "/assets/img/more-explore-2.png",
      title: "",
      content: ``,
      date: "November 07, 2019",
      numComments: 4,
    },
    {
      imgSrc: "/assets/img/event-2.png",
      title: "",
      content: ``,
      date: "November 07, 2019",
      numComments: 5,
    },
    {
      imgSrc: "/assets/img/event-3.png",
      title: "",
      content: ``,
      date: "November 07, 2019",
      numComments: 1,
    },
    {
      imgSrc: "/assets/img/more-explore-2.png",
      title: "",
      content: ``,
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

  navigateToHomeIntro() {
    document
      .querySelector(".home-intro-section")
      .scrollIntoView({ behavior: "smooth" });
  }
}
