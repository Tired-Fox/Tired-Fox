import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex, escapeSvelte } from 'mdsvex';
import shiki from 'shiki';

const HIGHLIGHTER = await shiki.getHighlighter({ theme: 'slack-dark' });
const highlight = async (code, lang='text') => {
    const html = escapeSvelte(HIGHLIGHTER.codeToHtml(code, { lang }));
    return `{@html \`${html}\`}`;
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.svx'],
    highlight: {
        highlighter: highlight
    }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
    extensions: ['.svelte', '.svx'],
	preprocess: [vitePreprocess({}),mdsvex(mdsvexOptions)],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
