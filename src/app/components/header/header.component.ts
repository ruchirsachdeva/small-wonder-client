import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  contactButtonText: string = "Call Us Today! (+91 1234 12345)";
  constructor() {}

  ngOnInit() {}
}
