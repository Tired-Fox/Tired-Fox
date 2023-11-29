import { baseUrl } from '$lib/config';
import type { Post } from '$lib/types.js';
import { error } from '@sveltejs/kit';

const render = (pages: string[], posts: Post[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
	>

	${pages
		.map(
			(element) => `
	<url>
	  <loc>${element}</loc>
		<lastmod>${`${process.env.VITE_BUILD_TIME}`}</lastmod>
	</url>`,
		)
		.join('\n')}

	${posts
		.map((element) => {
			const { date, slug } = element;
			return `
	<url>
	  <loc>${baseUrl}/${slug}</loc>
		<lastmod>${`${new Date(date).toISOString()}`}</lastmod>
	</url>
	`;
		})
		.join('')}
</urlset>`;

/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders, fetch }) {
	try {
		const posts: Post[] = await (await fetch('/api/content')).json();

		const pages = [''].map((element) => `${baseUrl}${element}`);

		setHeaders({
			'Cache-Control': 'max-age=0, s-max-age=600',
			'Content-Type': 'application/xml',
		});

		return new Response(render(pages, posts));
	} catch (err) {
		console.error(`Error in sitemap.xml: ${err}`);
		throw error(500, err as Error);
	}
}