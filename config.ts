// config.ts

export const hero = {
  name: "Mafaz Ahmed",
  titles: ["Frontend Developer", "React Enthusiast", "Open Source Contributor"],
  subtitle: "I build responsive and performant web apps with modern tech.",
};

export const about = {
  heading: "About Me",
  description: `I’m a passionate developer with expertise in building modern UIs and performant web apps.`,
};

export const socialLinks = [
  {
    label: "GitHub",
    iconClass: "fab fa-github",
    url: "https://github.com/mafazahmed",
  },
  {
    label: "LinkedIn",
    iconClass: "fab fa-linkedin",
    url: "https://www.linkedin.com/in/mafazahmed",
  },
  {
    label: "Email",
    iconClass: "fa fa-envelope",
    url: "mailto:mafazahmed@example.com",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "Unsplash Image App",
    description: "Infinite scroll, lazy loading, search, Redux Toolkit — built for performance.",
    github: "https://github.com/mafazahmed/unsplash-image-app",
    demo: "https://unsplash.mafaz.dev",
  },
  {
    title: "NYT Replica",
    description: "A pixel-perfect New York Times homepage clone using Redux + TypeScript.",
    github: "https://github.com/mafazahmed/nyt-replica",
    demo: "https://nyt.mafaz.dev",
  },
];

export const typedStrings = hero.titles;