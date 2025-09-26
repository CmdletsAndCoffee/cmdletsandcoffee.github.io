// This file generates the Atom feed for your blog.
import { getCollection } from "astro:content";
import { SITE } from "@config";
import { COLLECTION_NAMES_LIST } from "../alkaline.config";

export async function GET(context) {
	const allPosts = await Promise.all(
		COLLECTION_NAMES_LIST.map(async (collection) => {
			const posts = await getCollection(collection);
			return posts.map((post) => ({ ...post, collection }));
		}),
	);

	const sortedPosts = allPosts
		.flat()
		.filter((post) => !post.data?.isDraft)
		.sort(
			(a, b) =>
				new Date(b.data?.pubDatetime).valueOf() -
				new Date(a.data?.pubDatetime).valueOf(),
		);

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
				const postUrl = `${context.site}${post.collection}/${post.slug}/`;
				return `<entry>
        <title>${post.data.title}</title>
        <link href="${postUrl}"/>
        <id>${postUrl}</id>
        <published>${new Date(post.data.pubDatetime).toISOString()}</published>
        <updated>${new Date(post.data.modDatetime ?? post.data.pubDatetime).toISOString()}</updated>
        <summary>${post.data.description}</summary>
      </entry>`;
			}).join("")}
</feed>`.trim();

	return new Response(atomFeed, {
		headers: { "Content-Type": "application/atom+xml" },
	});
}
