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
import { ActivitiesPageComponent } from "./pages/activities-page/activities-page.component";
import { AboutUSComponent } from "./pages/about-us-page/about-us/about-us.component";
import { HistoryComponent } from "./pages/about-us-page/history/history.component";
import { LeadershipComponent } from "./pages/about-us-page/leadership/leadership.component";
import { ExtrasComponent } from "./pages/about-us-page/extras/extras.component";
import { ActivitiesListComponent } from "./pages/activities-page/activities-list/activities-list.component";
import { ActivityDisplayComponent } from "./pages/activities-page/activity-display/activity-display.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "about-us",
    component: AboutUsPageComponent,
    children: [
      { path: "", redirectTo: "info", pathMatch: "full" },
      { path: "info", component: AboutUSComponent },
      { path: "history", component: HistoryComponent },
      { path: "leadership", component: LeadershipComponent },
      { path: "vision", component: ExtrasComponent },
      { path: "mission", component: ExtrasComponent },
      { path: "motto", component: ExtrasComponent },
    ],
  },
  { path: "curriculum", component: CurriculumPageComponent },
  { path: "admissions", component: AdmissionsPageComponent },
  { path: "franchise", component: FranchisePageComponent },
  {
    path: "activities",
    component: ActivitiesPageComponent,
    children: [
      { path: "", redirectTo: "all-activities", pathMatch: "full" },
      { path: "all-activities", component: ActivitiesListComponent },
      { path: "activity/:name", component: ActivityDisplayComponent },
    ],
  },
  {
    path: "events-and-gallery",
    component: EventsAndGalleryPageComponent,
  },
  { path: "books-and-beyond", component: BooksAndBeyondPageComponent },
  { path: "blog", component: BlogPageComponent },
  { path: "schedule-tour", component: ScheduleTourPageComponent },
  { path: "shoonya", component: ShoonyaPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
