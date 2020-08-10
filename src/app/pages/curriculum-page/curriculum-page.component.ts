import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-curriculum-page",
  templateUrl: "./curriculum-page.component.html",
  styleUrls: ["./curriculum-page.component.scss"],
})
export class CurriculumPageComponent implements OnInit {
  image = "/assets/img/school-building.jpg";

  sectionHeading1: string = "Lorem Ipsum dolor sit";
  sectionText1: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  leftImg1 = "/assets/img/more-explore-1.png";
  leftTitle1: string = "Lorem Ipsum";
  leftContent1: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  leftListItems1 = ["Sample 1", "Sample 1", "Sample 1", "Sample 1"];

  leftImg2 = "/assets/img/more-explore-2.png";
  leftTitle2: string = "Lorem Ipsum Again";
  leftContent2: string = `Blah Blah Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  leftListItems2 = ["Sample 2", "Sample 2", "Sample 2", "Sample 2"];

  rightImg1 = "/assets/img/more-explore-3.png";
  rightTitle1: string = "Lorem Ipsum Right";
  rightContent1: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  rightListItems1 = ["Sample 1", "Sample 1", "Sample 1", "Sample 1"];

  rightImg2 = "/assets/img/more-explore-3.png";
  rightTitle2: string = "Lorem Ipsum Right";
  rightContent2: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  rightListItems2 = ["Sample 1", "Sample 1", "Sample 1", "Sample 1"];

  constructor() {}

  ngOnInit() {}
}
