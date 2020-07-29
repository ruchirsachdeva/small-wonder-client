import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-events-and-gallery-page",
  templateUrl: "./events-and-gallery-page.component.html",
  styleUrls: ["./events-and-gallery-page.component.scss"],
})
export class EventsAndGalleryPageComponent implements OnInit {
  image = "/assets/img/events.jpg";

  constructor() {}

  ngOnInit() {}
}
