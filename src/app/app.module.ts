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
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, SlickCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
