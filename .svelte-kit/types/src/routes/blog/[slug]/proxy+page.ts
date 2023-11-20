// @ts-nocheck
import { error } from '@sveltejs/kit';

/** @param {Parameters<import('./$types.js').PageLoadEvent>[0]} event */
export async function load({ url }) {
    try {
        const post = await import(`../../../content/${url.pathname.slice(1)}.svx`);

        return {
            content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        console.log(e);
        throw error(404, `Could not find ${url.pathname}`);
    }
}