export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  description: string;
  image: string;
  date: string | null;
  link: string | null;
}

export const certificates: Certificate[] = [
  {
    id: "agile-leadership",
    name: "Agile Leadership",
    issuer: "Professional Development",
    description:
      "Certification in Agile leadership principles covering iterative development, team collaboration, sprint planning, and adaptive project management methodologies.",
    image: "/images/certificates/agile-leadership.jpeg",
    date: null,
    link: null,
  },
  {
    id: "frontend-development-libraries",
    name: "Frontend Development Libraries",
    issuer: "freeCodeCamp",
    description:
      "Completed freeCodeCamp's Frontend Development Libraries certification covering React, Redux, jQuery, Bootstrap, and Sass for building dynamic and responsive user interfaces.",
    image: "/images/certificates/frontend-development-libraries.png",
    date: null,
    link: null,
  },
  {
    id: "legacy-js-algorithms",
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    description:
      "Earned freeCodeCamp's legacy JavaScript certification covering ES6, regular expressions, debugging, data structures, algorithm scripting, and object-oriented programming.",
    image: "/images/certificates/legacy-js-algorithms-and-data-structure.png",
    date: null,
    link: null,
  },
  {
    id: "legacy-responsive-web-design",
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    description:
      "Completed freeCodeCamp's legacy Responsive Web Design certification covering HTML, CSS, Flexbox, CSS Grid, and accessibility principles for building mobile-first websites.",
    image: "/images/certificates/legacy-responsive-web-design.png",
    date: null,
    link: null,
  },
  {
    id: "mcdo",
    name: "McDonald's Certificate of Completion",
    issuer: "McDonald's",
    description:
      "Certificate of completion from McDonald's recognizing training and service excellence in a fast-paced professional environment, demonstrating teamwork, discipline, and customer service skills.",
    image: "/images/certificates/mcdo.jpeg",
    date: null,
    link: null,
  },
  {
    id: "research-development",
    name: "Research and Development",
    issuer: "Academic Institution",
    description:
      "Certification in Research and Development recognizing participation and contribution to structured academic research, methodology application, and development of research-based solutions.",
    image: "/images/certificates/research-development.jpeg",
    date: null,
    link: null,
  },
];
