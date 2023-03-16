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
      content: `The warm, nurturing and academic environment has exceeded our expectations in developing the whole child, I am so happy my daughter studied in this school in her early years.`,
      name: "Sangeeta Shah",
      designation: "Mother of Tanvi",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `Small Wonders’ way to inspire its learners and their parents through activities is amazing. My son loves his friends and all the fun learning activities!`,
      name: "Suman Jaglan",
      designation: "Mother of Aryan and Abhijay",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `I am thoroughly impressed by the virtual online learning of Small Wonders.   This sudden transition to online learning was quickly streamlined by the amazing staff, hats off..`,
      name: "Nishant Gupta",
      designation: "Father of Kanav",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `My daughter has learned so much from Small Wonders. The minute she started at Small Wonders we felt a lot of changes in her confidence level.`,
      name: "Rupali gupta",
      designation: "Mother of Muskaan",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `Small Wonders focuses on the individual strengths of its children which I felt when my son grew up in the excellent individualized and warm environment of your school.`,
      name: "Arti Chhabra",
      designation: "Mother of Krishiv",
      imgSrc: "/assets/img/sampleParent.png",
    },
    // {
    //   content: `Dear Sanju Ma’am, I really want to thank you for the efforts you are putting in our kids in this kind of situation.  In this Lockdown period, my daughter looks forward to the forthcoming classes so eagerly. This continuity in teaching and your efforts are commendable.`,
    //   name: "Suchi Katpalia",
    //   designation: "Mother of Mantra",
    //   imgSrc: "/assets/img/sampleParent.png",
    // },
    {
      content: `Both my kids started at Small Wonders and grew as independent young kids that are now poised to win over the world..`,
      name: "Minky Narang",
      designation: "Mother of Kaavya and Dhani",
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
