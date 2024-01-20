import { Injectable } from "@angular/core";
import * as categoryConstants from "./category.constants";
import { Event } from "./event";

@Injectable({
  providedIn: "root",
})
export class EventsService {
  eventsList: Event[];
  coCurricularEventsList: Event[];
  sportsEventsList: Event[];
  mediaEventsList: Event[];
  schoolGalleryList: Event[];

  constructor() {}

  intialiseEventsList() {
    // containing 9 objects currently
    this.eventsList = [
      {
        "title": "Creative Arts Exhibition",
        "description": "A display of our students' creativity in arts and crafts, showcasing talent and imagination in various artistic forms.",
        "date": "January 12, 2020",
        "category": categoryConstants.CO_CURRICULAR_EVENTS,
        "eventImage": "/assets/img/kids_library.jpg",
        "imageList": ["/assets/img/kids_library.jpg", "/assets/img/kids_library.jpg", "/assets/img/kids_library.jpg"],
        "videoList": []
      },
      {
        "title": "Annual Sports Day",
        "description": "A day dedicated to athleticism and sportsmanship, featuring track events, team sports, and fun competitions.",
        "date": "January 24, 2020",
        "category": categoryConstants.SPORTS,
        "eventImage": "/assets/img/kids_library.jpg",
        "imageList": ["/assets/img/kids_library.jpg", "/assets/img/kids-books.png", "/assets/img/kids_library.jpg"],
        "videoList": []
      },
      {
        "title": "Local Newspaper Feature",
        "description": "Our students' achievements highlighted in a local newspaper, covering various academic and extracurricular activities.",
        "date": "September 12, 2020",
        "category": categoryConstants.MEDIA_COVERAGE,
        "eventImage": "/assets/img/kids_library.jpg",
        "imageList": ["/assets/img/kids_library.jpg", "/assets/img/kids_library.jpg", "/assets/img/kids_library.jpg"],
        "videoList": []
      },
      {
        "title": "School Art Gallery Opening",
        "description": "The inauguration of our new art gallery, featuring student artwork and collaborative projects.",
        "date": "July 12, 2020",
        "category": categoryConstants.SCHOOL_GALLERY,
        "eventImage": "/assets/img/kids_library.jpg",
        "imageList": ["/assets/img/kids_library.jpg", "/assets/img/kids_library.jpg", "/assets/img/kids_library.jpg"],
        "videoList": []
      },
      {
        "title": "Drama Club Performance",
        "description": "A captivating play performed by our drama club, showcasing the theatrical talents of our students.",
        "date": "June 12, 2020",
        "category": categoryConstants.CO_CURRICULAR_EVENTS,
        "eventImage": "/assets/img/kids_library.jpg",
        "imageList": ["/assets/img/kids_library.jpg", "/assets/img/kids_library.jpg", "/assets/img/kids_library.jpg"],
        "videoList": []
      },
      {
        "title": "Inter-School Sports Tournament",
        "description": "Our students compete in various sports, demonstrating teamwork and skills in an inter-school tournament.",
        "date": "September 12, 2019",
        "category": categoryConstants.SPORTS,
        "eventImage": "/assets/img/kids_library.jpg",
        "imageList": ["/assets/img/kids_library.jpg", "/assets/img/kids-books.png", "/assets/img/kids_library.jpg"],
        "videoList": []
      },
      {
        "title": "Media Feature on Student Innovation",
        "description": "Highlighting innovative projects and achievements of our students in science and technology.",
        "date": "January 12, 2020",
        "category": categoryConstants.MEDIA_COVERAGE,
        "eventImage": "/assets/img/kids_library.jpg",
        "imageList": ["/assets/img/kids_library.jpg", "/assets/img/kids_library.jpg", "/assets/img/kids_library.jpg"],
        "videoList": []
      },
      {
        "title": "School Gallery Art Walk",
        "description": "A guided tour of our school gallery, showcasing student artwork and creative projects across various grades.",
        "date": "January 12, 2020",
        "category": categoryConstants.SCHOOL_GALLERY,
        "eventImage": "/assets/img/kids_library.jpg",
        "imageList": ["/assets/img/kids_yoga.jpg", "/assets/img/kids_yoga.jpg", "/assets/img/kids_library.jpg"],
        "videoList": []
      },
      {
        "title": "Cultural Fest",
        "description": "A celebration of diverse cultures with performances, exhibits, and activities showcasing global traditions.",
        "date": "January 12, 2020",
        "category": categoryConstants.CO_CURRICULAR_EVENTS,
        "eventImage": "/assets/img/kids_library.jpg",
        "imageList": ["/assets/img/kids_library.jpg", "/assets/img/kids-books.png", "/assets/img/kids_library.jpg"],
        "videoList": []
      }
    ]

    this.coCurricularEventsList = this.filterCoCurricular();
    this.sportsEventsList = this.filterSports();
    this.mediaEventsList = this.filterMediaCoverage();
    this.schoolGalleryList = this.filterSchoolGallery();

    // debugger;
  }

  filterCoCurricular() {
    return this.eventsList.filter(
      (obj) => obj.category == categoryConstants.CO_CURRICULAR_EVENTS
    );
  }

  filterSports() {
    return this.eventsList.filter(
      (obj) => obj.category == categoryConstants.SPORTS
    );
  }

  filterMediaCoverage() {
    return this.eventsList.filter(
      (obj) => obj.category == categoryConstants.MEDIA_COVERAGE
    );
  }

  filterSchoolGallery() {
    return this.eventsList.filter(
      (obj) => obj.category == categoryConstants.SCHOOL_GALLERY
    );
  }
}
