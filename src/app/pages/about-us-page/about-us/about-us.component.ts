import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUSComponent implements OnInit {
  text: string = `SMALL WONDERS SCHOOL was conceptualised with the Philosophy that kids enjoy their schooling if given an environment which creates enthusiasm every time.
   We believe that education is not only a tool to achieve professional milestones, but also a means to make lives better.
    Small Wonders objective is to raise happy and conscientious personalities who lead the competitive market as well as live a life of fulfilment.`;

  aboutUsItems = [
    { value: 555, info: "WONDER BEYOND - BOOKS" },
    { value: 544, info: "WONDERSHOONYA" },
    { value: 544, info: "WONDERNOMICS" },
    { value: 544, info: "WONDER EXPLODING DOTS" },
  ];

  imageList = [];
  image = "/assets/img/aboutUs.jpg";
  imageCardTitle = "TITLE";
  imageCardContent = `We create the CURIOUS Beings , As we understand We can teach a lesson for a Day, but if we teach them to learn by curiosity, they will continue the learning process as long as they live.`;

  constructor() {}

  ngOnInit() {
    this.imageList = [
      {
        imageUrl: "/assets/img/more-explore-1.png",
        text: "Curriculum",
        link: '/curriculum'
      },
      {
        imageUrl: "/assets/img/more-explore-2.png",
        text: "Activities",
        link: '/activities/all-activities'
      },
      {
        imageUrl: "/assets/img/more-explore-3.png",
        text: "Books & Beyond",
        link: '/books-and-beyond'
      },
      {
        imageUrl: "/assets/img/more-explore-1.png",
        text: "Events & Gallery",
        link: '/events-and-gallery'
      },
    ];
  }
}
