import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-franchise-page",
  templateUrl: "./franchise-page.component.html",
  styleUrls: ["./franchise-page.component.scss"],
})
export class FranchisePageComponent implements OnInit {
  bgImage: string = "/assets/img/franchise.jpg";
  title: string = "Franchise";

  sectionHeading1: string = `Become small wonder's licensee`;
  sectionText1: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  redirectText1: string = `Curriculum is based on various Key concepts which empower the child to explore the concept of KNOWING MYSELF to LEARNING ABOUT OTHERS and going through various stages to reach to SELF EXPLORATION.`;

  redirectText2: string = `SMALL WONDERS SCHOOL was conceptualised with the Philosophy that kids enjoy their schooling if given an environment which creates enthusiasm every time.`;

  redirectText3: string = `SMALL WONDERS SCHOOL was conceptualised with the Philosophy that kids enjoy their schooling if given an environment which creates enthusiasm every time.`;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(url) {
    this.router.navigate([url]);
  }
}
