import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-curriculum-page",
  templateUrl: "./curriculum-page.component.html",
  styleUrls: ["./curriculum-page.component.scss"],
})
export class CurriculumPageComponent implements OnInit {
  image = "/assets/img/school-building.jpg";
  title: string = "curriculum";

  sectionHeading1: string = "CURRICULUM and TEACHING METHODOLGIES";
  sectionText1: string = `Curriculum is based on various Key concepts which empower the child to explore the concept of KNOWING MYSELF to LEARNING ABOUT OTHERS and going through various stages to reach to SELF EXPLORATION.
   Its marvellously designed to cater to satiate the curiosity of child. 
   Dynamic learning goals align and animate our curriculum.
    Joy and curiosity are inherent to all learning at Small Wonders. 
    We have developed our own curriculum which meets the national and international levels both in a very flexible way.`;

  leftImg1 = "/assets/img/more-explore-1.png";
  leftTitle1: string = "KINDERGARTEN: FIRST STEP (Age group 2-5)";
  leftContent1: string = `Step into our Kindergarten (Pre-Primary) wing and you will be welcomed by engaged, lively and Happy Kids making the best of their moments in well-equipped and spacious Arena which is more like a HOME to them. We understand that the transition from home to school is a major step for children and parents alike. We also know that kindergarten is the first experience of a child in structured environment, Our qualified, experienced teachers work with parents to make this move as smooth as possible, considering the specific needs of each child. We have a flexible approach, taking into consideration family requirements and our curriculum cater to this flexibility to enhance the motor skills of the students.`;

  leftImg2 = "/assets/img/more-explore-2.png";
  leftTitle2: string = "SUSTAINING MOMENTUM (7-11)";
  leftContent2: string = `In classes 3-5, the ongoing Creative Curriculum covers a variety of topics ranging from “Enjoying Cooking” to “Excursions and Expeditions” alongwith attaining Mathematical, social and environmental skills. We give Authentic experience through Project experience - based learning through scholastic and co scholastic activities  which enhances Teamwork, Problem solving, And Curiosity skills. High standards in the core skills of literacy and numeracy are maintained throughout, with academic rigour escalating in these classes to ensure each student achieves a momentum in their Primary Years. We believe that every child has something unique to offer and we pride ourselves on identifying and nurturing that trait, academic, sporting, musical, artistic, scientific, or technological. Their curricular and co- curricular activities help them to be a smart and knowledgeable Wonderian. Students leave Primary wing as caring, considerate individuals, taking with them a wealth of experiences: the Happiness of teamwork, learning to develop the habit of saving and wise spending;  the fun they’ve  nurturing our youngest Wonderians in our Buddy System by becoming Buddy for their juniors and owning the responsibility of taking care and the joy of personal goals achieved as Prefects, Team Captains and Heads of House. Memories of their time at Wonder Family include moments in the spotlight in school, different outside field trips and personal bests on the sports field. And, of course, they take with them the friends they have made. Friends that will walk alongside them for a long time to come.`;

  rightImg1 = "/assets/img/more-explore-3.png";
  rightTitle1: string = "PRIMARY WING:  PICKING UP PACE (Age group 5-6)";
  rightContent1: string = `We ensure a seamless transition from the Pre- Primary to Classes 1 and 2 for our students to continue to enjoy areas of continuous provision, with the structure of the day becoming increasingly formal, in preparation for PRIMARY.  Our creative curriculum ensures all learning styles are catered for and students are engaged and curious about the topics studied. English and maths remain discrete subjects whilst subject specialists teach French, music, drama and outdoor education in the form of Gardening and PE. All subjects are enhanced through several educational visits each term. In case of need provision of on-line classes is also provided to cater to the needs of the students.`;

  rightImg2 = "/assets/img/more-explore-3.png";
  rightTitle2: string = "STUDENT ASSESSMENT";
  rightContent2: string = `The assessment plan of the school is keeping with the Periodic Assessments conducted to assess the understanding, application, and effort of the child in each of scholastic and co scholastic area. It is based on Assessment for learning (FEED FORWARD) and ASSESSMENT OF LEARNING (FEED BACKWARD)`;

  leftImg3 = "/assets/img/more-explore-2.png";
  leftTitle3: string = "KEY ELEMENTS: Providing new LEARNING ENVIRONMENT";
  leftContent3: string = `WONDERNOMICS, WONDER EXPLODING DOTS, WONDERSHOONYA, WONDER BOOKS AND BEYOND.`;
  leftItems3 =['WONDER BOOKS and BEYOND' , 'WONDERNOMICS', 'WONDER EXPLODING DOTS', 'WONDER SHOONYA'];
  leftLinks3 =['books-and-beyond', '#', '#', 'shoonya'];

  constructor() {}

  ngOnInit() {}
}
