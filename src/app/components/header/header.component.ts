import { Component, OnInit } from "@angular/core";
import { Router, Params } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  contactButtonText: string = "Call Us Today! (+91 7027401201)";
  constructor(public router: Router) {}

  ngOnInit() {}

  navigateToHome() {
    this.router.navigate(["/"]);
  }
}
