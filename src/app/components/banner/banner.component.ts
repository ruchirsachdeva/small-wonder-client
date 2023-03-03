import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigateToContact() {
    this.router.navigate(["/contact-form"]);
  }

}
