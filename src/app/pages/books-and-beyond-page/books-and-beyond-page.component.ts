import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books-and-beyond-page",
  templateUrl: "./books-and-beyond-page.component.html",
  styleUrls: ["./books-and-beyond-page.component.scss"],
})
export class BooksAndBeyondPageComponent implements OnInit {
  image = "/assets/img/books.jpg";

  constructor() {}

  ngOnInit() {}
}
