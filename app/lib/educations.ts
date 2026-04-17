export interface Educations {
  id: string;
  level: string;
  school: string;
  course: string | null;
  period: string;
  honor: string | null;
  image: string | null;
}

export const educations: Educations[] = [
  {
    id: "college",
    level: "College",
    school: "Bestlink College of the Philippines",
    course: "BSIT Major in Information Management",
    period: "2023 - Present",
    honor: null,
    image: "/profile2.png",
  },
  {
    id: "senior-high",
    level: "Secondary: Sr. High School",
    school: "Gardner College Diliman Q. C.",
    course: "Information and Communications Technology",
    period: "2021 - 2023",
    honor: "With High Honor",
    image: "/profile1.png",
  },
  {
    id: "junior-high",
    level: "Secondary: Jr. High School",
    school: "Masambong High School Q. C.",
    course: null,
    period: "2017 - 2021",
    honor: "With Honor",
    image: null,
  },
  {
    id: "elementary",
    level: "Primary: Elementary School",
    school: "Apolonio Samson Elementary School",
    course: null,
    period: "2011 - 2017",
    honor: null,
    image: null,
  },
];

export const educationStory = `From my early years at Apolonio Samson Elementary School to my current college life at Bestlink College of the Philippines, every step of my educational journey has shaped me into the programmer I am becoming...
  
  In junior and senior high school, my passion for programming grew stronger. I gained experience in languages like Visual Basic, Java, and PHP, and I loved every moment of solving logical problems and building mini-projects. Achieving honors and awards was just a bonus to the joy of learning and discovering.
  
  College has pushed me to grow even more — from working on group projects to exploring real-world coding practices. It taught me discipline, collaboration, and creativity.
  
  Today, as an IT college student, I'm diving deep into software development, web design, and database systems. Each project, lesson, and challenge is preparing me for the real world. My goal is not just to become a skilled developer but also to create solutions that improve lives and make an impact through technology.`;
