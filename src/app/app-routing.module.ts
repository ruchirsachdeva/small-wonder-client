import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "../app/pages/home-page/home-page.component";
import { AboutUsPageComponent } from "./pages/about-us-page/about-us-page.component";
import { CurriculumPageComponent } from "./pages/curriculum-page/curriculum-page.component";
import { AdmissionsPageComponent } from "./pages/admissions-page/admissions-page.component";
import { FranchisePageComponent } from "./pages/franchise-page/franchise-page.component";
import { EventsAndGalleryPageComponent } from "./pages/events-and-gallery-page/events-and-gallery-page.component";
import { BooksAndBeyondPageComponent } from "./pages/books-and-beyond-page/books-and-beyond-page.component";
import { BlogPageComponent } from "./pages/blog-page/blog-page.component";
import { ScheduleTourPageComponent } from "./pages/schedule-tour-page/schedule-tour-page.component";
import { ShoonyaPageComponent } from "./pages/shoonya-page/shoonya-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about-us", component: AboutUsPageComponent },
  { path: "curriculum", component: CurriculumPageComponent },
  { path: "admissions", component: AdmissionsPageComponent },
  { path: "franchise", component: FranchisePageComponent },
  { path: "events-and-gallery", component: EventsAndGalleryPageComponent },
  { path: "books-and-beyond", component: BooksAndBeyondPageComponent },
  { path: "blog", component: BlogPageComponent },
  { path: "schedule-tour", component: ScheduleTourPageComponent },
  { path: "shoonya", component: ShoonyaPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
