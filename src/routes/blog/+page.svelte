<script lang="ts">
    import type { Post } from '$lib/types';
	import Article from './story/Article.svelte';

	export let data;

    const pageSize = 4;
    let numPages = Math.ceil(data.posts.length / pageSize);

    $: page = 0;

    let items: Post[];
    $: items = data.posts.slice(pageSize*page, Math.min(pageSize*page+pageSize, data.posts.length))

    function next() {
        if (page < numPages - 1) {
            page++;
        }
        window.scrollTo(0, 0);
    }
    function previous() {
        if (page > 0) {
            page--;
        }
        window.scrollTo(0, 0);
    }
</script>

<svelete:head>
	<title>Test Blog Posts</title>
</svelete:head>

<section aria-label="Blog posts">
    <div class="flex justify-between w-full border-y dark:border-zinc-300/70 border-zinc-800/70 mb-8 px-4 py-1 text-sm">
        <span>Page {page+1}/{numPages}</span>
        <em>Written by Zachary Boehm</em>
        <span>Articles {data.posts.length}</span>
    </div>
	<ul class="grid justify-between">
		{#if items}
            {#each items as post, i}
                <Article post={post} featured={i==0&&page==0} />
            {/each}
        {:else}
            <li>No Posts</li>
        {/if}
        <li class={`flex items-center justify-center gap-4 full mt-12 ${numPages < 2 ? 'hide':''}`}>
            <button type="button" on:click={previous} disabled={page==0} aria-label="Previous Page">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="12" viewBox="0 0 256 512" fill="currentColor"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>
            </button>
            {page+1} / {numPages}
            <button type="button" on:click={next} disabled={page==numPages-1} aria-label="Next Page">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="12" viewBox="0 0 256 512" fill="currentColor"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
            </button>
        </li>
	</ul>
</section>
<style>
    .hide {
        @apply hidden;
    }
    ul.grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }

    .full {
        grid-column: 1/-1;
    }
</style>