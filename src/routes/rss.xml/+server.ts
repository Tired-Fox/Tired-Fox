import { base } from '$app/paths';
import { page } from '$app/stores';
import type { Post } from '$lib/types.js';
import { error } from '@sveltejs/kit';

const render = (posts: Post[], origin) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
        <title>Zachary Boehm's Blog</title>
        <link>${origin}${base}/blog</link>
        <description>Follow Zachary on his journey of learning different coding practices</description>
        ${
            posts.map(post => (`<item>
                <title>${post.title}</title>
                <link>${origin}${base}/blog/${post.slug}</link>
                <description>${post.description}</description>
            </item>`)).join('')
        }
    </channel>
</rss>`;

/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders, fetch, url }) {
	try {
		const posts: Post[] = await (await fetch(`${base}/api/content`)).json();
		setHeaders({
			'Cache-Control': 'max-age=0, s-max-age=600',
			'Content-Type': 'application/xml',
		});

		return new Response(render(posts, url.origin));
	} catch (err) {
		console.error(`Error in rss.xml: ${err}`);
		throw error(500, err as Error);
	}
}