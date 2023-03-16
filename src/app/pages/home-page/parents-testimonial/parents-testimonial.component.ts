import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-parents-testimonial",
  templateUrl: "./parents-testimonial.component.html",
  styleUrls: ["./parents-testimonial.component.scss"],
})
export class ParentsTestimonialComponent implements OnInit {
  @Input() testimonialList = [
    {
      content: `The warm, nurturing and academic environment has exceeded our expectations in developing the whole child, I am so happy my daughter studied in this school in her early years.`,
      name: "Sangeeta Shah",
      designation: "Mother of Tanvi",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `Small Wonders’ way to inspire its learners and their parents through activities is amazing. My son loves his friends and all the fun learning activities. I know Small wonders is a safe place for my child, each day becomes a great day as he enters the gateway of his school. I truly appreciate all the members of staff!`,
      name: "Suman Jaglan",
      designation: "Mother of Aryan and Abhijay",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `I am thoroughly impressed by the virtual online learning of Small Wonders.   This sudden transition to online learning was quickly streamlined by you people. Our children could continue their online education, taking tests and completing projects through online lessons, through your dedicated and committed staff.`,
      name: "Nishant Gupta",
      designation: "Father of Kanav",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `My daughter has learned so much from Small Wonders. The minute she started at Small Wonders we felt a lot of changes in her confidence level. Her overall development in the Small Wonders, had opened the gates for her in one of the best Boarding School. Though, even today, she loves her pre- schoolteachers and talks about them, when she is a grown-up child now..`,
      name: "Rupali gupta",
      designation: "Mother of Muskaan",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `Small Wonders focuses on the individual strengths of its children which I felt when my son grew up in the excellent individualized and warm environment of your school.  The connectivity of teachers with the students provides them academic challenges on an individual basis, as well as the tools and strategies needed to meet those challenges. I am so pleased that my child grew in this environment.`,
      name: "Arti Chhabra",
      designation: "Mother of Krishiv",
      imgSrc: "/assets/img/sampleParent.png",
    }
  ];

  sample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  titleIntro: string = "Our Testimonials";
  title: string = "What our Happy Parents Say";

  // slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, 'autoplay': true, 'autoplaySpeed': 3500, 'dots': true, 'infinite': true, 'arrows': true 'responsive': [{ 'breakpoint': 1600, 'settings': { 'slidesToShow': 3, 'slidesToScroll': 1, } }, { 'breakpoint': 1000, 'settings': { 'slidesToShow': 2, 'slidesToScroll': 1, } }, { 'breakpoint': 600, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, } }] };

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: false,
    // infinite: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: '1025',
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
      {
        breakpoint: '825',
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
      {
        breakpoint: '600',
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
      {
        breakpoint: '480',
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() { }

  slickInit(e) {
    console.log("slick initialized");
  }
}
