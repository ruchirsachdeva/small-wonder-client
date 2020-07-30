import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-more-to-explore",
  templateUrl: "./more-to-explore.component.html",
  styleUrls: ["./more-to-explore.component.scss"],
})
export class MoreToExploreComponent implements OnInit {
  @Input() imageList = [];

  constructor() {}

  ngOnInit() {}
}
