import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SlickCarouselModule } from "ngx-slick-carousel";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CarouselImageSectionComponent } from "./components/carousel-image-section/carousel-image-section.component";
import { ImageSectionComponent } from "./components/image-section/image-section.component";
import { AboutUsPageComponent } from "./pages/about-us-page/about-us-page.component";
import { CurriculumPageComponent } from "./pages/curriculum-page/curriculum-page.component";
import { AdmissionsPageComponent } from "./pages/admissions-page/admissions-page.component";
import { FranchisePageComponent } from "./pages/franchise-page/franchise-page.component";
import { EventsAndGalleryPageComponent } from "./pages/events-and-gallery-page/events-and-gallery-page.component";
import { BooksAndBeyondPageComponent } from "./pages/books-and-beyond-page/books-and-beyond-page.component";
import { BlogPageComponent } from "./pages/blog-page/blog-page.component";
import { ScheduleTourPageComponent } from "./pages/schedule-tour-page/schedule-tour-page.component";
import { ShoonyaPageComponent } from "./pages/shoonya-page/shoonya-page.component";
import { AboutUSComponent } from "./pages/about-us-page/about-us/about-us.component";
import { HistoryComponent } from "./pages/about-us-page/history/history.component";
import { LeadershipComponent } from "./pages/about-us-page/leadership/leadership.component";
import { ExtrasComponent } from "./pages/about-us-page/extras/extras.component";
import { MoreToExploreComponent } from "./components/more-to-explore/more-to-explore.component";
import { TextInfoBlockComponent } from "./components/text-info-block/text-info-block.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { ImageTextInfoBlockComponent } from "./components/image-text-info-block/image-text-info-block.component";
import { ImageIntroCardComponent } from "./components/image-intro-card/image-intro-card.component";
import { HomeIntroSectionComponent } from "./pages/home-page/home-intro-section/home-intro-section.component";
import { HomeCurriculumSectionComponent } from "./pages/home-page/home-curriculum-section/home-curriculum-section.component";
import { CarouselInfoCardComponent } from './components/carousel-info-card/carousel-info-card.component';
import { PageBreakSectionComponent } from './pages/home-page/page-break-section/page-break-section.component';
import { BranchInfoSectionComponent } from './pages/home-page/branch-info-section/branch-info-section.component';
import { CarouselInfoCardEventComponent } from './components/carousel-info-card-event/carousel-info-card-event.component';
import { ContactFormComponent } from './pages/home-page/contact-form/contact-form.component';
import { FranchiseOpportunityComponent } from './pages/home-page/franchise-opportunity/franchise-opportunity.component';
import { SchoolAgeBreakComponent } from './pages/home-page/school-age-break/school-age-break.component';
import { ParentsTestimonialComponent } from './pages/home-page/parents-testimonial/parents-testimonial.component';
import { LeftAlignedImageComponent } from './pages/curriculum-page/left-aligned-image/left-aligned-image.component';
import { RightAlignedImageComponent } from './pages/curriculum-page/right-aligned-image/right-aligned-image.component';
import { TextInfoBlockFullComponent } from './components/text-info-block-full/text-info-block-full.component';
import { BackgroundImgTextComponent } from './components/background-img-text/background-img-text.component';
import { InputFormComponent } from './pages/franchise-page/input-form/input-form.component';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';
import { CornerStoreComponent } from './pages/activities-page/corner-store/corner-store.component';
import { ActivitiesListComponent } from './pages/activities-page/activities-list/activities-list.component';
import { ActivityDisplayComponent } from './pages/activities-page/activity-display/activity-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    CarouselImageSectionComponent,
    ImageSectionComponent,
    AboutUsPageComponent,
    CurriculumPageComponent,
    AdmissionsPageComponent,
    FranchisePageComponent,
    EventsAndGalleryPageComponent,
    BooksAndBeyondPageComponent,
    BlogPageComponent,
    ScheduleTourPageComponent,
    ShoonyaPageComponent,
    AboutUSComponent,
    HistoryComponent,
    LeadershipComponent,
    ExtrasComponent,
    MoreToExploreComponent,
    TextInfoBlockComponent,
    AccordionComponent,
    ImageTextInfoBlockComponent,
    ImageIntroCardComponent,
    HomeIntroSectionComponent,
    HomeCurriculumSectionComponent,
    CarouselInfoCardComponent,
    PageBreakSectionComponent,
    BranchInfoSectionComponent,
    CarouselInfoCardEventComponent,
    ContactFormComponent,
    FranchiseOpportunityComponent,
    SchoolAgeBreakComponent,
    ParentsTestimonialComponent,
    LeftAlignedImageComponent,
    RightAlignedImageComponent,
    TextInfoBlockFullComponent,
    BackgroundImgTextComponent,
    InputFormComponent,
    ActivitiesPageComponent,
    CornerStoreComponent,
    ActivitiesListComponent,
    ActivityDisplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, SlickCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
