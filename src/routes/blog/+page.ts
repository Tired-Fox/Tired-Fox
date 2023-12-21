import type { Post } from "$lib/types";

export async function load({ fetch, url }) {
    const response = await fetch('api/content');
    const posts: Post[] = await response.json();

    const page = url.searchParams.get('page');
    try {
        return { posts, page: Number(page) };
    } catch (e) {
        return { posts, page: 0 };
    }
}