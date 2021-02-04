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
      title: "KINDERGARTEN: FIRST STEP",
      content: `Step into our Kindergarten (Pre-Primary) wing and you will be welcomed by engaged, lively and Happy Kids making the best of their moments in well-equipped and spacious Arena which is more like a HOME to them.`,
      ageInterval: '2-5 years'
    },
    {
      imgSrc: "/assets/img/girl-book.png",
      title: "PRIMARY WING: PICKING UP PACE",
      content: `We ensure a seamless transition from the Pre- Primary to Classes 1 and 2 for our students to continue to enjoy areas of continuous provision, with the structure of the day becoming increasingly formal, in preparation for PRIMARY. `,
      ageInterval: '5-6 years'
    },
    {
      imgSrc: "/assets/img/kids-books.png",
      title: "SUSTAINING MOMENTUM",
      content: ` High standards in the core skills of literacy and numeracy are maintained throughout, with academic rigour escalating in these classes to ensure each student achieves a momentum in their Primary Years.`,
      ageInterval: '7-11 years'
    },
    {
      imgSrc: "/assets/img/more-explore-1.png",
      title: "STUDENT ASSESSMENT",
      content: `The assessment plan of the school is keeping with the Periodic Assessments conducted to assess the understanding, application, and effort of the child in each of scholastic and co scholastic area. `,
    }
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

  navigateToHomeIntro() {
    document
      .querySelector(".home-intro-section")
      .scrollIntoView({ behavior: "smooth" });
  }
}
