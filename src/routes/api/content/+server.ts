import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/content/**/*.svx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}
	posts = posts.sort(
		(first, second) =>
			new Date(second.updated ?? second.published).getTime() -
			new Date(first.updated ?? first.published).getTime()
	);
	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
