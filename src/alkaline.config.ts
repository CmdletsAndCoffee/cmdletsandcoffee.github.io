import { AUTHORS } from "./data/authors.ts";

import type { Site, Socials, NavEntry, Blog } from "./Types/types";

/**
 * @description This file contains the configuration for the Alkaline theme.
 * - There are quite a few settings, but they allow for a vast amount of automatization across the theme
 * @exports SITE - The site configuration object
 * @exports NAVIGATION - The navigation configuration object
 * @exports BLOG - The blog configuration object
 */

//  SITE socials - used for the site footer
// See: ./Types/types.ts for more info on author socials
export const socials: Socials[] = [
  {
    platform: "email",
    popup: "Email Me",
    username: "mockmyberet@me.com",
  },
  {
    platform: "github",
    popup: "See my GitHub",
    username: "mockmyberet",
  },
  {
    platform: "twitter",
    popup: "See my Twitter",
    username: "mockmyberet",
  },
  {
    platform: "bluesky",
    popup: "See me on Bluesky",
    username: "tommybecker.bsky.social",
  },
  {
    platform: "web",
    popup: "Visit this other Website",
    username: "https://chaoticthought.com", // For 'web', username is the full URL
  },
  {
    platform: "atom",
    popup: "Subscribe to the Feed",
    username: "/feed.atom", // For 'atom' or other custom links, username can be the path
  },
];

export const AUTHORS_LIST = AUTHORS;
const mainAuthor = AUTHORS.find((author) => author.id === 1);

export const SITE: Site = {
  title: "Cmdlets & Coffee",
  logo: "/assets/logo.png",
  showTitleBackground: true,
  faviconSrc: "/assets/favicon/favicon.png",
  url: "https://cmdletsandcoffee.github.io",
  ogImage: "/og-image.webp", // in public directory
  author: mainAuthor?.name ?? "Cmdlets & Coffee", // Made with ❤️ by {your-name}
  heading: "Welcome to Cmdlets & Coffee",
  description:
    "Serving up your daily brew of PowerShell, automation, and tech musings. Come for the scripts, stay for the conversation.",
  keywords: ["astro", "theme", "blog"],
  disableIndexing: false, // true for no indexing
  socials: socials,
  locale: "en_US",
  postsPerPage: 5,
  shikiConfig: {
    // ctrl+space for theme suggestions
    theme: "one-dark-pro",
  },
  // I provide  Types for many of the top Google Fonts, edit or remove ./Types/google-fonts.d.ts to add/remove font types
  fonts: [
    {
      typeface: "serif",
      fontFamily: "SUSE",
      fontWeights: ["100..800"],
    },
    {
      typeface: "sans",
      fontFamily: "Roboto",
      fontWeights: ["100..900"],
      includeItalic: true,
    },
    {
      typeface: "mono",
      fontFamily: "Fira Code",
      fontWeights: [400, 500, 700],
    },
  ],
  // Trouble with the fonts? It's likely because a font family name isn't EXACTLY correct or the font weights you're trying to fetch are not supported for that font family. For example, setting Fira Code with fontWeights: ["400...700"] will not work because Fira Code only supports 400, 500, and 700.
};

// TODO: "slug" is the more appropriate term  here but would require more changes throughout the theme

export const NAVIGATION: NavEntry[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/blog",
    text: "Blog",
  },
  {
    href: "/tags",
    text: "Tags",
  },
];

export const BLOG: Blog = {
  title: "Cmdlets & Coffee",
  subtitle: "The Coffeehouse",
  author: mainAuthor?.name ?? "Cmdlets & Coffee",
  description: SITE.description || "",
  keywords: SITE.keywords,
  postsPerPage: SITE.postsPerPage,
};

// export the name(s) of the collections as a list - must match the name of the collection in the ./Types/types.ts file
export const COLLECTION_NAMES_LIST = ["blog"] as const;
