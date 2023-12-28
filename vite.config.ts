import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dynamicImport from 'vite-plugin-dynamic-import';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [sveltekit(), dynamicImport(/* Options */), Icons({ compiler: 'svelte' })]
});
