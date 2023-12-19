<script lang="ts">
	import { formatDate } from '$lib/utils.js';

	export let data;
</script>

<svelete:head>
	<title>Test Blog Posts</title>
</svelete:head>

<section aria-label="Blog posts">
	<ul class="flex flex-wrap gap-4 justify-between">
		{#each data.posts as post}
            <li class="block w-full">
                <h3 class="text-3xl mb-2 font-bold">{post.title}</h3>
                <div class=" text-zinc-800/70 dark:text-zinc-300/70">
                    <div class="w-full flex justify-between items-center border-t border-b border-current py-1 px-2">
                        <em>{formatDate(post.published)}</em>
                        <div class="flex items-center gap-2">
                            {#each post.categories as category, index}
                            <span class={`block w-fit h-fit`} aria-label={category}>
                                #{category}
                            </span>
                            {/each}
                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-center aspect-[16/8] overflow-y-hidden my-8">
                    <img src={post.hero} alt="picsum" />
                </div>
                <div class="article-preview columned">
                    {#if post.preview}
                        {#each post.preview.split('\n\n') as paragraph}
                            <p>{paragraph}</p>
                        {/each}
                    {/if}
                </div>
				<a href={`/blog/${post.slug}`} class="line-link w-full my-4">
                    <div class="w-[98%] flex items-center gap-4 transition-[width] duration-300 text-zinc-800/70 dark:text-zinc-300/70">
                        <span class="w-1 h-1 bg-current rounded-full"></span>
                        <span class="w-1 h-1 bg-current rounded-full"></span>
                        <span class="w-1 h-1 bg-current rounded-full"></span>
                        <span class="flex-1 bg-current h-1 rounded-full"></span>
                        <p>Read More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="8" viewBox="0 0 384 512" fill="currentColor">
                            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                    </div>
                </a>
            </li>
		{/each}
	</ul>
</section>
<style>

    .line-link:hover > div {
        width: 100%;
    }

    @media only screen and (min-width: 786px) {
        .line-link > div:not(:hover) {
            animation-name: --point-link;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }
    }

    .article-preview {
        @apply prose dark:prose-invert max-w-none;
    }
    .article-preview p + p {
        text-indent: 2em;
        margin-top: 2em;
        hyphens: auto;
    }
    .article-preview p:first-child {
        hyphens: auto;
    }
    .article-preview p:first-child::first-letter {
        initial-letter: 2;
        padding-right: .5em;
    }
    @keyframes --point-link {
        from {
            width: 98%;
        }
        50% {
            width: 96%;
        }
        to {
            width: 98%;
        }
    }
</style>