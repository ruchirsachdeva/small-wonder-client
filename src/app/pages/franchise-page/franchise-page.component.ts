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

  sectionHeading1: string = `Become a Small Wonders' licensee`;
  sectionText1: string = `New Heights, New Opportunities. Join Small Wonders and take advantage of our momentum.`;

  redirectText1: string = `Curriculum is based on various Key concepts which empower the child to explore the concept of KNOWING MYSELF to LEARNING ABOUT OTHERS and going through various stages to reach to SELF EXPLORATION.`;

  redirectText2: string = `SMALL WONDERS SCHOOL was conceptualised with the Philosophy that kids enjoy their schooling if given an environment which creates enthusiasm every time.`;

  redirectText3: string = `SMALL WONDERS SCHOOL was conceptualised with the Philosophy that kids enjoy their schooling if given an environment which creates enthusiasm every time.`;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(url) {
    this.router.navigate([url]);
  }
}
