import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  styleUrls: ['./activity-display.component.scss'],
})
export class ActivityDisplayComponent implements OnInit {
  activityName = '';

  activityImageList = [
    '/assets/img/kids_race.jpg',
    '/assets/img/kids_stage.jpg',
    '/assets/img/kids_yoga.jpg',
  ];
  curriculumImageList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
  ];
  coCurricularImageList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ];
  stageExposureImageList = [
    1, 2, 3, 4, 5
  ];
  discoveryImageList = [
    1, 2, 3, 4, 5
  ];
  sportsImageList = [
    1, 2, 3, 4, 5, 6, 7
  ];
  clubsImageList = [
    1, 2, 3, 4, 5, 6
  ];
  activityMap = new Map([
    ['curriculum', this.curriculumImageList],
    ['co-curricular', this.coCurricularImageList],
    ['stage-exposure', this.stageExposureImageList],
    ['discovery', this.discoveryImageList],
    ['sports', this.sportsImageList],
    ['clubs', this.clubsImageList]
  ]);


  slideConfig = {
    slidesToShow: 1,
    nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    dots: true,
    infinite: true,
    centerMode: true,
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.activityName = params.get('name');

      this.activityImageList = this.activityMap.get(this.activityName).map(
        name => '/assets/img/activities/' + this.activityName + '/' + name + '.jpg'
      );
    });
  }

  slickInit(e) {
    console.log('slick initialized in Activity Display Component');
  }
}
