import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';




import { EmbedVideo } from 'ngx-embed-video';

// ✅ Pipes
import { SafePipe } from './pipe/safe.pipe';

// ✅ Shared Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TextInfoBlockComponent } from './components/text-info-block/text-info-block.component';
import { MoreToExploreComponent } from './components/more-to-explore/more-to-explore.component';
import { ImageIntroCardComponent } from './components/image-intro-card/image-intro-card.component';
import { ImageTextInfoBlockComponent } from './components/image-text-info-block/image-text-info-block.component';
import { ImageRightTextInfoBlockComponent } from './components/image-right-text-info-block/image-right-text-info-block.component';
import { BackgroundImgTextComponent } from './components/background-img-text/background-img-text.component';
import { TextInfoBlockFullComponent } from './components/text-info-block-full/text-info-block-full.component';
import { CarouselImageSectionComponent } from './components/carousel-image-section/carousel-image-section.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';
import { ImageCardSectionComponent } from './components/image-card-section/image-card-section.component';
import { ImageCardTextComponent } from './components/image-card-text/image-card-text.component';
import { CarouselInfoCardComponent } from './components/carousel-info-card/carousel-info-card.component';
import { CarouselInfoCardEventComponent } from './components/carousel-info-card-event/carousel-info-card-event.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { BannerComponent } from './components/banner/banner.component';
import { RecentEventsComponent } from './components/recent-events/recent-events.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { VideoComponent } from './components/video/video.component';

// ✅ Home Page Components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeIntroSectionComponent } from './pages/home-page/home-intro-section/home-intro-section.component';
import { HomeCurriculumSectionComponent } from './pages/home-page/home-curriculum-section/home-curriculum-section.component';
import { PageBreakSectionComponent } from './pages/home-page/page-break-section/page-break-section.component';
import { BranchInfoSectionComponent } from './pages/home-page/branch-info-section/branch-info-section.component';
import { ContactFormComponent } from './pages/home-page/contact-form/contact-form.component';
import { FranchisePageComponent } from './pages/activities-page/franchise-page/franchise-page.component';


import { FranchiseOpportunityComponent } from './pages/home-page/franchise-opportunity/franchise-opportunity.component';
import { SchoolAgeBreakComponent } from './pages/home-page/school-age-break/school-age-break.component';
import { ParentsTestimonialComponent } from './pages/home-page/parents-testimonial/parents-testimonial.component';

// ✅ Other Pages
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AboutUSComponent } from './pages/about-us-page/about-us/about-us.component';
import { HistoryComponent } from './pages/about-us-page/history/history.component';
import { LeadershipComponent } from './pages/about-us-page/leadership/leadership.component';
import { ExtrasComponent } from './pages/about-us-page/extras/extras.component';

import { CurriculumPageComponent } from './pages/curriculum-page/curriculum-page.component';
import { LeftAlignedImageComponent } from './pages/curriculum-page/left-aligned-image/left-aligned-image.component';
import { RightAlignedImageComponent } from './pages/curriculum-page/right-aligned-image/right-aligned-image.component';
import { LearningBlockComponent } from './pages/curriculum-page/learning-block/learning-block.component';

import { BooksAndBeyondPageComponent } from './pages/books-and-beyond-page/books-and-beyond-page.component';
import { LearningIntroComponent } from './pages/books-and-beyond-page/learning-intro/learning-intro.component';
import { LearningEnvSectionComponent } from './pages/books-and-beyond-page/learning-env-section/learning-env-section.component';

import { AdmissionsPageComponent } from './pages/admissions-page/admissions-page.component';
import { AdmissionStepComponent } from './pages/admissions-page/admission-step/admission-step.component';
import { AdmissionInputFormComponent } from './pages/admissions-page/admission-input-form/admission-input-form.component';

import { FranchisePagesComponent } from './pages/franchise-pages/franchise-pages.component';

import { ContactFormsComponent } from './pages/contact-forms/contact-forms.component';


import { InputFormComponent } from './pages/franchise-pages/input-form/input-form.component';

import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';
import { CornerStoreComponent } from './pages/activities-page/corner-store/corner-store.component';
import { ActivitiesListComponent } from './pages/activities-page/activities-list/activities-list.component';
import { ActivityDisplayComponent } from './pages/activities-page/activity-display/activity-display.component';
import { ExploreSectionComponent } from './pages/activities-page/explore-section/explore-section.component';


import { ScheduleTourPageComponent } from './pages/schedule-tour-page/schedule-tour-page.component';
import { LocationExploreComponent } from './pages/schedule-tour-page/location-explore/location-explore.component';

import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogDetailsComponent } from './pages/blog-page/blog-details/blog-details.component';

import { EventsAndGalleryPageComponent } from './pages/events-and-gallery-page/events-and-gallery-page.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

import { ShoonyaPageComponent } from './pages/shoonya-page/shoonya-page.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SafePipe,

    // Home Page
    HomePageComponent,
    HomeIntroSectionComponent,
    HomeCurriculumSectionComponent,
    PageBreakSectionComponent,
    BranchInfoSectionComponent,
    ContactFormComponent,
    FranchiseOpportunityComponent,
    SchoolAgeBreakComponent,
    ParentsTestimonialComponent,

    // About Us Page
    AboutUsPageComponent,
    AboutUSComponent,
    HistoryComponent,
    LeadershipComponent,
    ExtrasComponent,

    // Curriculum Page
    CurriculumPageComponent,
    LeftAlignedImageComponent,
    RightAlignedImageComponent,
    LearningBlockComponent,

    // Books & Beyond
    BooksAndBeyondPageComponent,
    LearningIntroComponent,
    LearningEnvSectionComponent,

    // Admissions
    AdmissionsPageComponent,
    AdmissionStepComponent,
    AdmissionInputFormComponent,

    // Franchise
    FranchisePageComponent,
    InputFormComponent,
    FranchisePagesComponent,

    // Activities
    ActivitiesPageComponent,
    CornerStoreComponent,
    ActivitiesListComponent,
    ActivityDisplayComponent,
    ExploreSectionComponent,

    // Schedule Tour
    ScheduleTourPageComponent,
    LocationExploreComponent,

    // Blog
    BlogPageComponent,
    BlogDetailsComponent,

    // Events & Gallery
    EventsAndGalleryPageComponent,
    GalleryComponent,

    // Other
    ShoonyaPageComponent,
    OurHistoryComponent,
    TestimonialPageComponent,

    // Shared Components
    AccordionComponent,
    TextInfoBlockComponent,
    MoreToExploreComponent,
    ImageIntroCardComponent,
    ImageTextInfoBlockComponent,
    ImageRightTextInfoBlockComponent,
    BackgroundImgTextComponent,
    TextInfoBlockFullComponent,
    CarouselImageSectionComponent,
    ImageSectionComponent,
    ImageCardSectionComponent,
    ImageCardTextComponent,
    CarouselInfoCardComponent,
    CarouselInfoCardEventComponent,
    JumbotronComponent,
    BannerComponent,
    RecentEventsComponent,
    OverlayComponent,
    VideoComponent,
    ContactFormsComponent,
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
   
    NgbModule,
   
    SlickCarouselModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
