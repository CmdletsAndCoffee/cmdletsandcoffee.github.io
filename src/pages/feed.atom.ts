// This file generates the Atom feed for your blog. It is written in TypeScript for type safety.
import type { APIContext } from "astro";
import { getPosts } from "@utils/getPosts";
import { SITE } from "@config";
import { COLLECTION_NAMES_LIST } from "../alkaline.config";

export async function GET(context: APIContext) {
  const allPosts = await getPosts(COLLECTION_NAMES_LIST);

  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.data.pubDatetime!).valueOf() - new Date(a.data.pubDatetime!).valueOf()
  );

  // Handle case where there are no posts
  if (sortedPosts.length === 0) {
    // Return a minimal, valid feed
    return new Response(generateEmptyFeed(context), { headers: { "Content-Type": "application/atom+xml" } });
  }

  const lastPost = sortedPosts[0];
  const lastUpdated = lastPost?.data.modDatetime ?? lastPost?.data.pubDatetime ?? new Date();

  const atomFeed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${SITE.title}</title>
  <subtitle>${SITE.description}</subtitle>
  <link href="${context.url.href}" rel="self"/>
  <link href="${context.site}"/>
  <updated>${new Date(lastUpdated).toISOString()}</updated>
  <id>${context.site}</id>
  <author>
    <name>${SITE.author}</name>
  </author>
  ${sortedPosts
    .map((post) => {
      const postUrl = new URL(`${post.collection}/${post.id}`, context.site).href;
      return `<entry>
        <title>${post.data.title}</title>
        <link href="${postUrl}"/>
        <id>${postUrl}</id>
        <published>${new Date(post.data.pubDatetime!).toISOString()}</published>
        <updated>${new Date(post.data.modDatetime ?? post.data.pubDatetime!).toISOString()}</updated>
        <summary>${post.data.description}</summary>
      </entry>`;
    })
    .join("")}
</feed>`.trim();

  return new Response(atomFeed, {
    headers: { "Content-Type": "application/atom+xml" },
  });
}

function generateEmptyFeed(context: APIContext): string {
  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${SITE.title}</title>
  <subtitle>${SITE.description}</subtitle>
  <link href="${context.url.href}" rel="self"/>
  <link href="${context.site}"/>
  <updated>${new Date().toISOString()}</updated>
  <id>${context.site}</id>
  <author>
    <name>${SITE.author}</name>
  </author>
</feed>`.trim();
}
