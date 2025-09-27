import { getCollection } from 'astro:content';

export async function getPosts(collections: readonly string[] = ['blog']): Promise<any[]> {
  const allPosts = await Promise.all(
    collections.map(async (collection) => {
      const posts = await getCollection(collection as any);
      const filteredPosts = posts.filter((post: any) => import.meta.env.PROD ? !post.data.draft : true);
      return filteredPosts;
    })
  );
  return allPosts.flat();
}
