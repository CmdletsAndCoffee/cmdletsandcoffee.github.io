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
        name: "Jane Doe",
        email: "jane.doe@example.com",
        socials: [
            { platform: "github", username: "janedoe" },
            { platform: "twitter-x", username: "janedoe" },
            { platform: "linkedin", username: "janedoe" },
        ],
    },
    {
        id: 2,
        name: "John Smith",
        email: null, // Email is optional
        socials: [
            { platform: "github", username: "johnsmith" },
            { platform: "twitter-x", username: "johnsmith" },
            { platform: "linkedin", username: "johnsmith" },
            { platform: "mastodon", username: "johnsmith@mastodon.social" }, // Mastodon requires the full username
        ],
    },
    {
        id: 99,
        name: "Alex Johnson",
        socials: [
            { platform: "github", username: "alex-johnson" },
            { platform: "web", username: "https://www.alexjohnson.com" },
            { platform: "linkedin", username: "alex-johnson" },
        ],
    },
];
