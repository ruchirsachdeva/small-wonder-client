import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: "app-background-img-text",
  templateUrl: "./background-img-text.component.html",
  styleUrls: ["./background-img-text.component.scss"],
})
export class BackgroundImgTextComponent implements OnInit {
  @Input() title: string = "";
  @Input() bgImage: string = "";

  constructor() {
  }

  ngOnInit() {
    let element: HTMLElement = document.querySelector(".bg-img");
    element.style.background = `url(${this.bgImage}) no-repeat`;
    element.style.backgroundSize = "cover";
    // element.style.backgroundAttachment = "fixed";
    // element.style.backgroundPosition = "right center";
  }
  // TODO Add small scale image for smaller width screens
  // change   bgImage: string = "/assets/img/school-building.jpg";
}
