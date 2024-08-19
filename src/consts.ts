import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "_Devotion",
  DESCRIPTION: "Bienvenue sur devotion la plateform pour les developeurs developers.",
  AUTHOR: "Joseph Saleon Terras",
}

// Work Page
export const WORK: Page = {
  TITLE: "Demos",
  DESCRIPTION: "Les Demos des outils de developpement.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Présentation", 
    HREF: "/", 
  },
  { 
    TEXT: "Modules", 
    HREF: "/modules", 
  },
  { 
    TEXT: "Templates", 
    HREF: "/demos", 
  },
  { 
    TEXT: "Projets", 
    HREF: "/projects", 
  },
  // { 
  //   TEXT: "Infos", 
  //   HREF: "/infos", 
  // },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "fr.devotion@gmail.com",
    HREF: "mailto:fr.devotion@gmail.com",
  },
  // { 
  //   NAME: "Github",
  //   ICON: "github",
  //   TEXT: "markhorn-dev",
  //   HREF: "https://github.com/markhorn-dev/astro-sphere"
  // },
  // { 
  //   NAME: "LinkedIn",
  //   ICON: "linkedin",
  //   TEXT: "markhorn-dev",
  //   HREF: "https://www.linkedin.com/in/markhorn-dev/",
  // },
  // { 
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
]

