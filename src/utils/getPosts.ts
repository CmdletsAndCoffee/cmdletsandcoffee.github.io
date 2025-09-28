import { getCollection, type CollectionEntry } from "astro:content";
import { COLLECTION_NAMES_LIST } from "src/alkaline.config";

type PostCollection = (typeof COLLECTION_NAMES_LIST)[number];
type Post = CollectionEntry<PostCollection>;

export async function getPosts(collections: readonly PostCollection[] = COLLECTION_NAMES_LIST): Promise<Post[]> {
  const allPosts = await Promise.all(
    collections.map(async (collection) => {
      const posts = await getCollection(collection);
      const filteredPosts = posts.filter((post) => (import.meta.env.PROD ? !post.data.isDraft : true));
      return filteredPosts;
    })
  );
  return allPosts.flat();
}
