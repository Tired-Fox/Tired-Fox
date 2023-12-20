<script lang="ts">
	import type { Post } from '$lib/types';
	import Article from './story/Article.svelte';
	import Feature from './story/Feature.svelte';

	export let data;
    function exists(index: number): Boolean {
        return data.posts.length >= index + 1;
    }
    function post(index: number): Post {
        return data.posts[index];
    }
</script>

<svelete:head>
	<title>Test Blog Posts</title>
</svelete:head>

<section aria-label="Blog posts">
	<ul class="grid justify-between">
		{#if data.posts.length}
            {#each data.posts as post}
                <Article post={post} />
            {/each}
        {:else}
            <li>No Posts</li>
        {/if}
	</ul>
</section>
<style>
    ul.grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }
</style>