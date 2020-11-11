import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books-and-beyond-page",
  templateUrl: "./books-and-beyond-page.component.html",
  styleUrls: ["./books-and-beyond-page.component.scss"],
})
export class BooksAndBeyondPageComponent implements OnInit {
  title: string = "Books & Beyond";
  envSectionTitle: string = "Learning Environment";
  contentList = [
    {
      heading: "Providing Inspired and highly trained Faculty",
      text: `Our teachers look at the world through the child's perspective because each one learns in different ways and at a different pace. We provide teachers with tools and guidance to accommodate a child’s natural curiosity and to fully support each child.`,
    },
    {
      heading: "Providing curriculum designed by inspiring and highly trained Wonderian faculty",
      text: `Our teachers look at the world through the child's perspective because each one learns in different ways and at a different pace.  We provide teachers with tools and guidance to accommodate a child’s natural curiosity and to fully support each child. We highly value our teachers and recognize them as educators whose role is very influential in child’s learning. `,
    },
    {
      heading: "Safe Sanctuaries for learning",
      text: `All of us know that physical surroundings can impact our behaviour, thoughts, emotions, and well-being. We know children learn with all five senses; our school is more than just functional spaces. Our creative learning spaces are specifically designed to support our curriculum and daily activities, providing children with a safe, calm, and stress-free learning environment.`,
    },
    {
      heading: "Mixed age groups",
      text: `Children have all the facilities to learn in different age group to explore the mental, verbal, and logical skills in different environment. It gives the opportunity to them to understand their own mental levels and mingle with the students beyond their own age.`,
    },
    {
      heading: "Rich language environment",
      text: `Students are given environment to learn other languages also along with English and their mother tongue. They have the option to choose that medium of expression in which they are more comfortable to express themselves fully.`,
    },
  ];

  introSectionTitle: string = "Learning happens everywhere";
  introSectionContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  introSectionContentList = [
    {
      heading: "Children Learn while They Play",
      text: `Besides regular school  curriculum we provide an environment of learning beyond school hsours also where the curriculum   is designed exclusively as per the mental level of children, not related to age and we have mixed age groups to explore the mental , verbal and logical skills in different environment. children have the right to learn and develop individually and in group settings through different play way techniques.`,
    },
    {
      heading: "Learning by Exploring",
      text: `Besides regular curriculum we have following activities which boosts the Wonderians to be the best global citizens by exploring the unknown to bring it to their known world.`,
    },
  ];

  daySectionTitle: string = "Day at small wonders";

  daySectionContent: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  childrenLearnSectionTitle: string = "What children will learn";
  childrenLearnSectionContent = [
    {
      heading: "1. DISCOVERING AND INTERMINGLING WITH THE WORLD",
      text: `We actively encourage independent thinking and adaptability alongside academic focus and an ever- evolving depth of learning as per the child’s mental level.  We strengthen student’s connection with nature and the surroundings through Science and Social Studies. Also support their activities through linguistic and Mathematical skills.`,
      color: "orange",
      bulletPoints: [
        "Linguistic Skills",
        "Mathematical Skills",
        "Science and Social skills",
      ],
    },
    {
      heading: "2. KNOWING THE WORLD WE LIVE IN",
      text: `Our different practices activate our kids to respect society and themselves for diversity in nature and society. We support children’s growth as conscious human beings by focusing on building a strong foundation for a healthy way of living which consists of physical activity, nutrition, rest, self-care, and care of others.`,
      color: "violet",
      bulletPoints: ["Cultural Competence", "Socio Emotional skills"],
    },
    {
      heading: "3. KNOWING TO BE EXPRESSIVE THROUGH VARIOUS WAYS",
      text: `We offer children opportunities to express themselves through musical activities, visual arts/crafts, bodily/verbal expression and thus familiarize students with their Heritage.`,
      color: "green",
      bulletPoints: [
        "Crafts and Visual Expression",
        "Verbal & Musical Expression",
        "Physical Expression",
      ],
    },
    {
      heading: "Practicing a healthy way of living",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      color: "blue",
      bulletPoints: ["Socio-Emotional Competence", "Physical Wellbeing"],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
