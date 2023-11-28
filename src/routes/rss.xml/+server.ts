import { baseUrl } from '$lib/config';
import type { Post } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

const render = (posts: Post[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
        <title>Zachary Boehm's Blog</title>
        <link>${baseUrl}/blog</link>
        <description>Follow Zachary on his journey of learning different coding practices</description>
        ${
            posts.map(post => (`<item>
                <title>${post.title}</title>
                <link>${baseUrl}/blog/${post.slug}</link>
                <description>${post.description}</description>
            </item>`)).join('')
        }
    </channel>
</rss>`;

/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders, fetch }) {
	try {
		const posts: Post[] = await (await fetch('/api/content')).json();
		setHeaders({
			'Cache-Control': 'max-age=0, s-max-age=600',
			'Content-Type': 'application/xml',
		});

		return new Response(render(posts));
	} catch (err) {
		console.error(`Error in rss.xml: ${err}`);
		throw error(500, err as Error);
	}
}