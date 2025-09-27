import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPosts(collections: string[] = ['blog']): Promise<any[]> {
  const allPosts = await Promise.all(
    collections.map(async (collection) => {
      const posts = await getCollection(collection as any);
      const filteredPosts = posts.filter(post => import.meta.env.PROD ? !post.data.draft : true);
      return filteredPosts;
    })
  );
  return allPosts.flat();
}
