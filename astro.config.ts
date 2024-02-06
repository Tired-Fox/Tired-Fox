import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import sentry from "@sentry/astro";
import spotlight from "@spotlightjs/astro";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
    integrations: [sitemap(), mdx(), sentry(), spotlight(), tailwind({ nesting: true })],
    markdown: {
        gfm: true,
        remarkPlugins: [],
        rehypePlugins: [],
        shikiConfig: {
            theme: 'dracula',
            langs: [],
            wrap: false,
        }
    }
});