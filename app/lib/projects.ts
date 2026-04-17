export interface Project {
  name: string;
  description: string;
  folder: string | null; 
  id: string;
  date: string | null;
  link: string | null;
  landingPage: string;
}

export const projects: Project[] = [
  {
    name: "SariSari IMS",
    description:
      "Inventory management system built specifically for sari-sari stores to track stocks and sales.",
    folder: "SariSari.IMS",
    id: "SariSari.IMS",
    date: "Mar 26, 2026",
    link: "https://sarisariims.vercel.app/",
    landingPage: "/images/projects/SariSari.IMS/landingpage.jpeg",
  },
  {
    name: "Moneyga",
    description:
      "A personal finance and budget tracking application to manage expenses and savings goals.",
    folder: "Moneyga",
    id: "Moneyga",
    date: "Feb 26, 2026",
    link: "https://moneyga.vercel.app",
    landingPage: "/images/projects/Moneyga/landingpage.jpeg",
  },
  {
    name: "Lost and Found",
    description:
      "Community-driven platform designed to help users report and track lost or found items in real-time.",
    folder: "LostandFound",
    id: "LostandFound",
    date: "October 27, 2025",
    link: "https://bcp-lostandfound.free.nf/index.php",
    landingPage: "/images/projects/LostandFound/landingpage.jpeg",
  },
  {
    name: "Viavanta",
    description:
      "Travel & lifestyle brand web experience focusing on minimalist design and user exploration.",
    folder: "Viavanta",
    id: "Viavanta",
    date: "Oct 7, 2025",
    link: "https://viavanta-administrative.vercel.app",
    landingPage: "/images/projects/Viavanta/landingpage.jpeg",
  },
  {
    name: "MCST",
    description:
      "A professional management system web application for organized administrative workflows.",
    folder: "MCST",
    id: "MCST",
    date: "Aug 3, 2025",
    link: "https://mcst-web.vercel.app",
    landingPage: "/images/projects/MCST/landingpage.jpeg",
  },
  {
    name: "Pikta",
    description:
      "Image-based creative platform for sharing and exploring visual content.",
    folder: "Pikta",
    id: "Pikta",
    date: "Jun 17, 2025",
    link: "https://pikta.vercel.app",
    landingPage: "/images/projects/Pikta/landingpage.jpeg",
  },
  {
    name: "Envirocab",
    description:
      "An eco-friendly cab booking platform focused on sustainable transportation solutions.",
    folder: "Envirocab",
    id: "Envirocab",
    date: "May 10, 2025",
    link: "https://tnvs-envirocab.vercel.app",
    landingPage: "/images/projects/Envirocab/landingpage.jpeg",
  },
  {
    name: "AdvenTours",
    description:
      "A full-featured adventure and travel booking web application.",
    folder: "AdvenTours",
    id: "Adventours",
    date: "Feb 18, 2025",
    link: "https://adventourstravelinc.com",
    landingPage: "/images/projects/Adventours/landingpage.jpeg",
  },
  {
    name: "AnnivProj",
    description:
      "An interactive web experience created as a special anniversary project.",
    folder: null,
    id: "AnnivProj",
    date: "Dec 17, 2024",
    link: "https://annivproj.vercel.app",
    landingPage: "/images/projects/AnnivProj/landingpage.jpeg",
  },
];
