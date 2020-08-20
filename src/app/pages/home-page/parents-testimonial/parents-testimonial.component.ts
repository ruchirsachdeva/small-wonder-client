import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-parents-testimonial",
  templateUrl: "./parents-testimonial.component.html",
  styleUrls: ["./parents-testimonial.component.scss"],
})
export class ParentsTestimonialComponent implements OnInit {
  @Input() testimonialList = [1, 2, 3, 4];

  sample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  titleIntro: string = "Our Testimonials";
  title: string = "What our Happy Parents Say";

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: true,
    infinite: true,
    centerMode: true,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1000, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  constructor() {}

  ngOnInit() {}

  slickInit(e) {
    console.log("slick initialized");
  }
}
