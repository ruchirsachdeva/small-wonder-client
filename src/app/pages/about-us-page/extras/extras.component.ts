import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-extras",
  templateUrl: "./extras.component.html",
  styleUrls: ["./extras.component.scss"],
})
export class ExtrasComponent implements OnInit {
  imageList = [];

  visionText: string =`To develop and share an inquiry-based approach to education that fosters creativity, promotes academic excellence, nurtures human relationships, and inspires a growing passion for learning.`;

  missionText: string =`To be the world’s leading provider of quality education, enriching the lives of millions of children and the communities by making creative, joyful, compassionate learners who use courageous and innovative thinking to build a harmonious and sustainable world. `;
  
  mottoText: string =`We offer a safe, nurturing and stimulating environment in which this culture of “Connect, Create, Conquer” can flourish Wonderians to be adventurous as they learn and grow.`;

  text: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

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
