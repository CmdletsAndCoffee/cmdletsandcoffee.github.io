import type { ShikiConfig } from "astro";
import type { GoogleFontFamily } from "./google-fonts";

/**
 * Core Type Definitions
 *
 * Font Configuration:
 * - Supports Google Fonts integration with type hints
 * - Configurable font weights and italic variants
 * - Categorizes fonts as sans, serif, or mono
 */

//  Accepts GoogleFontFamily for Google Fonts types(about 250 listed).
//  Accept any other string if Google Fonts types doesn't import - comment out the import to remove the font hints
type FontFamily = GoogleFontFamily | (GoogleFontFamily extends never ? string : never);

export type Font = {
  typeface: "sans" | "serif" | "mono";
  fontFamily: FontFamily;
  fontWeights: number[] | string[] | null;
  includeItalic?: boolean;
};

// these correspond to icon names for the remix icon library, they may need updated if you change the icon library see https://www.astroicon.dev/guides/customization/ for more info.
//
export const Platforms = [
  "behance",
  "bluesky",
  "codepen",
  "discord",
  "dribbble",
  "email",
  "evernote",
  "facebook",
  "flickr",
  "github",
  "gitlab",
  "global",
  "instagram",
  "line",
  "linkedin",
  "mastodon",
  "medium",
  "messenger",
  "notion",
  "patreon",
  "pinterest",
  "reddit",
  "rss",
  "skype",
  "slack",
  "snapchat",
  "soundcloud",
  "spotify",
  "telegram",
  "threads",
  "tiktok",
  "trello",
  "tumblr",
  "twitch",
  "twitter",
  "twitter-x",
  "vimeo",
  "vk",
  "web",
  "wechat",
  "whatsapp",
  "youtube",
] as const;

export type Socials = {
  platform: (typeof Platforms)[number] | string;
  url?: string;
  username: string;
};

export type Author = {
  id: number;
  name: string;
  socials: Socials[];
  email?: string | null;
};

export type Site = {
  title: string;
  url: string;
  author: string;
  postsPerPage: number;
  keywords: string[];
  disableIndexing: boolean;
  faviconSrc?: string;
  shikiConfig: ShikiConfig;
  description?: string | null;
  ogImage?: string;
  locale?: string;
  canonicalUrl?: string;
  fonts: Font[];
  showTitleBackground?: boolean;
  socials: Socials[];
};

export type NavEntry = {
  href: string;
  text: string;
};

export type Blog = {
  title: string;
  author: string;
  description: string;
  keywords: string[];
  postsPerPage: number;
};

export type Docs = Blog;

// This type is auto-generated. Do not edit manually.
export type ThemeNames =
  | "theme-light"
  | "theme-dark"
  | "theme-choco-mint"
  | "theme-deep-sea"
  | "theme-invisible"
  | "theme-leet"
  | "theme-neon-bliss"
  | "theme-old-couch"
  | "theme-peppermint"
  | "theme-pop-punk"
  | "theme-refresher"
  | "theme-slime"
  | "theme-syntax"
  | "theme-vanilla";

/**
 * Utility function to generate a social media URL.
 *
 * @param platform The social media platform (e.g., 'github').
 * @param username The user's username on that platform.
 * @returns The full URL to the user's profile.
 */
export function getSocialLink(platform: string, username: string): string {
  switch (platform) {
    case "behance":
      return `https://www.behance.net/${username}`;
    case "bluesky":
      return `https://bsky.app/profile/${username}`;
    case "codepen":
      return `https://codepen.io/${username}`;
    case "dribbble":
      return `https://dribbble.com/${username}`;
    case "facebook":
      return `https://www.facebook.com/${username}`;
    case "flickr":
      return `https://www.flickr.com/photos/${username}`;
    case "github":
      return `https://github.com/${username}`;
    case "gitlab":
      return `https://gitlab.com/${username}`;
    case "instagram":
      return `https://www.instagram.com/${username}`;
    case "linkedin":
      return `https://www.linkedin.com/in/${username}`;
    case "mastodon_old":
      // NOTE: Mastodon usernames require the server instance, e.g., 'user@server.com'.
      // This assumes a default instance if only a username is provided.
      if (!username.includes("@")) {
        return `https://mastodon.social/@${username}`;
      }
      const [user, domain] = username.split("@");
      return `https://${domain}/@${user}`;
    case "medium":
      return `https://medium.com/@${username}`;
    case "pinterest":
      return `https://www.pinterest.com/${username}`;
    case "reddit":
      return `https://www.reddit.com/user/${username}`;
    case "soundcloud":
      return `https://soundcloud.com/${username}`;
    case "spotify":
      return `https://open.spotify.com/user/${username}`;
    case "threads":
      return `https://www.threads.net/@${username}`;
    case "tiktok":
      return `https://www.tiktok.com/@${username}`;
    case "tumblr":
      return `https://${username}.tumblr.com`;
    case "twitch":
      return `https://www.twitch.tv/${username}`;
    case "twitter":
    case "twitter-x":
      return `https://x.com/${username}`;
    case "vimeo":
      return `https://vimeo.com/${username}`;
    case "youtube":
      return `https://www.youtube.com/@${username}`;
    case "email":
      return `mailto:${username}`;
    case "web":
    case "global":
      return username; // Assume the username is already a full URL
    default:
      return ""; // Return an empty string if the platform is not recognized
  }
}
