import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admissions-page",
  templateUrl: "./admissions-page.component.html",
  styleUrls: ["./admissions-page.component.scss"],
})
export class AdmissionsPageComponent implements OnInit {
  title: string = "Admission";
  bgImage: string = "/assets/img/school-building.jpg";
  introText: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

  admissionInfoList = [
    {
      step: 1,
      title: "Initial Application",
      content: `Enquiry Form: 
      To start the admissions procedure, all parents must fill in the enquiry form and submit the same to the school. APPLICATIONS FOR THE SESSION 2021-22 ARE OPEN.`,
      bulletList: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
      backgroundColor: "pink",
    },
    {
      step: 2,
      title: "ADMISSION PROCESS",
      content: `Parents will be invited to attend the orientation with prior appointment after receiving the enquiry form. The orientation will give them a clear insight about the school, the philosophy and curriculum.`,
      backgroundColor: "white",
    },
    {
      step: 3,
      title: "Submission of Forms",
      content: `Parents need to fill in the admission form {which is available on school Reception}, submit relevant documents and make an appointment for Interaction. (Note: Our admission policy requires parents to declare if their child or children have any special learning needs.)`,
      backgroundColor: "pink",
    },
    {
      step: 4,
      title: "Interaction",
      content: `Both parents must attend the Interaction, with their child/ children, with prior appointment. We believe that every child is unique and has his own individuality. Therefore, our admission process focuses mainly on the interaction session with student and parents.
      Interaction Process
      `,
      bulletList: [
        "For Pre-Primary School (Toddlers to KG) – There are no entrance exams only interaction with parents.",
        "For Primary School (Grade 1 to 5) – There are no entrance exams only interaction with parents and child. Though, the student's prior knowledge is assessed through a session with the Head of the Department.",
        "Meeting with Principal: A brief meeting with the Principal is arranged to confirm the admission and welcome the child and parents to the SWWS family.",
      ],
      backgroundColor: "white",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
