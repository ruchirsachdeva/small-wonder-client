import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us-page",
  templateUrl: "./about-us-page.component.html",
  styleUrls: ["./about-us-page.component.scss"],
})
export class AboutUsPageComponent implements OnInit {
  image = "/assets/img/aboutUs.jpg";
  title="";

  text = `“Welcome to our Wonderian Family, and to our website.”\nThis website has been created to give parents and carers a brief synopsis, ‘flavour’ of the offerings and facilities that are available to our students.`;


  constructor() {}

  ngOnInit() {}
}
