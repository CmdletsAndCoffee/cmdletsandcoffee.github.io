import type { Author } from "../Types/types";

/**
 * A hard-coded list of authors for the site.
 * This can be used for blog posts, documentation, or other content.
 * Add new authors here and reference them by their unique `id`
 * in the frontmatter of your Markdown files.
 */
export const AUTHORS: Author[] = [
  {
    id: 1,
    name: "Tommy Becker",
    email: "mockmyberet@me.com",
    socials: [
      { platform: "github", username: "mockmyberet" },
      { platform: "twitter-x", username: "mockmyberet" },
      { platform: "linkedin", username: "mockmyberet" },
      { platform: "bluesky", username: "tommybecker.bsky.social" },
    ],
  },
  {
    id: 2,
    name: "Brian Martin",
    email: "bhmartin@gmail.com", // Email is optional
    socials: [
      { platform: "github", username: "bmartin13" },
      // { platform: "twitter-x", username: "johnsmith" },
      // { platform: "linkedin", username: "johnsmith" },
      // { platform: "mastodon", username: "johnsmith@mastodon.social" }, // Mastodon requires the full username
    ],
  },
  {
    id: 99,
    name: "John Galt",
    email: "jg@gulch.com",
    socials: [
      { platform: "github", popup: "Don't find me on GitHub", username: "whoisjohngalt" },
      { platform: "web", popup: "This website doesn't exist...", username: "https://whoisjohngalt.com" },
      { platform: "linkedin", popup: "I don't have a LinkedIn", username: "john-galt-philosopher" },
    ],
  },
];
