import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-franchise-page",
  templateUrl: "./franchise-page.component.html",
  styleUrls: ["./franchise-page.component.scss"],
})
export class FranchisePageComponent implements OnInit {
  image = "/assets/img/franchise.jpg";

  constructor() {}

  ngOnInit() {}
}
