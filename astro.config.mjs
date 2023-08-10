import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Markdown plugins

// https://astro.build/config
export default defineConfig({
	site: 'https://tired-fox.github.io',
    base: '/Tired-Fox'
	integrations: [mdx(), sitemap()],
    // markdown: {
    //     // Applied to .md and .mdx files
    //     remarkPlugins: [],
    //     rehypePlugins: [],
    // },
});
