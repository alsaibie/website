import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ali AlSaibie",
  DESCRIPTION: "Personal site and blog sharing insights on technology, engineering, and innovation.",
  EMAIL: "ali@alsaibie.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to Ali AlSaibie's personal site and blog.",
};

export const ENGINEERING: Metadata = {
  TITLE: "Engineering",
  DESCRIPTION: "Robotics, mechatronics, and other engineering related articles",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const RESUME: Metadata = {
  TITLE: "Resume",
  DESCRIPTION: "Professional experience, education, and publications of Ali AlSaibie.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/alialsaibie",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/alsaibie",
  },
  {
    NAME: "Website",
    HREF: "https://ali.alsaibie.com",
  },
];
