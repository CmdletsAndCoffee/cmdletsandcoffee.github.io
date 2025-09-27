import { getCollection, type CollectionEntry } from "astro:content";

export async function getPosts(
  collections: readonly ("blog")[] = ["blog"],
): Promise<CollectionEntry<"blog">[]> {
  const allPosts = await Promise.all(
    collections.map(async (collection) => {
      const posts = await getCollection(collection);
      const filteredPosts = posts.filter((post) =>
        import.meta.env.PROD ? !post.data.isDraft : true,
      );
      return filteredPosts;
    }),
  );
  return allPosts.flat();
}
