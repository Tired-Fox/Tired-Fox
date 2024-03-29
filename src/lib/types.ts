export type Categories = 'sveltekit' | 'svelte';
export type Post = {
    title: string
    slug: string
    preview?: string,
    hero: string,
    description: string
    published: string,
    updated: string,
    categories: Categories[]
    draft: boolean
};