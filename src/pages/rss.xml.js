// Do not touch this file: This file generates the RSS feed for your blog. It pulls in all posts from the collections specified in COLLECTION_NAMES_LIST and formats them into an RSS feed.

import rss from "@astrojs/rss";
import { getPosts } from "@utils/getPosts";
import { SITE, BLOG } from "@config";
import { COLLECTION_NAMES_LIST } from "../alkaline.config";

export async function GET(context) {
  const allPosts = await getPosts(COLLECTION_NAMES_LIST);

  const items = allPosts
    .sort((a, b) => new Date(a.data?.pubDatetime || 0).valueOf() - new Date(b.data?.pubDatetime || 0).valueOf())
    .map((post) => ({
      title: post.data?.title || "Untitled",
      pubDate: post.data?.pubDatetime ? new Date(post.data.pubDatetime) : new Date(),
      description: post.data?.description || "",
      link: `${context.site}${post.collection}/${post.id}/`,
    }));

  return rss({
    title: SITE.title,
    description: BLOG.description || SITE.description,
    site: context.site,
    items: items,
    customData: `<language>${SITE.locale || "en-us"}</language>`,
  });
}
