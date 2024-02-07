import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import sentry from "@sentry/astro";
import spotlight from "@spotlightjs/astro";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

const NEEDS_BASE = false;

export default defineConfig({
    integrations: [sitemap(), mdx(), sentry(), spotlight(), tailwind({ nesting: true }), icon()],
    markdown: {
        gfm: true,
        remarkPlugins: [],
        rehypePlugins: [],
        shikiConfig: {
            theme: 'dracula',
            langs: [],
            wrap: false,
        }
    },
    site: process.env.NODE_ENV === 'production' ? 'https://tired-fox.vercel.app/' : 'https://localhost:4321',
    base: NEEDS_BASE ? 'Tired-Fox' : ''
});