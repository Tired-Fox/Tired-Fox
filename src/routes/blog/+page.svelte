<script lang="ts">
	import { formatDate } from '$lib/utils.js';
	export let data;
</script>

<svelete:head>
	<title>Test Blog Posts</title>
</svelete:head>

<section aria-label="Blog posts">
	<ul class="flex flex-col gap-4">
		{#each data.posts as post}
			<li
				class="w-full border border-dashed hover:border-solid border-zinc-800/50 dark:border-zinc-100/50 py-2 px-4 bg-zinc-800 shadow-sm shadow-zinc-900"
			>
				<a href={`/blog/${post.slug}`} class="block w-full">
					<div class="flex justify-between mb-2">
						<h3 class="text-lg font-bold">{post.title}</h3>
						{#if post.published}
							<em class="text-sm">{formatDate(post.updated ?? post.published)}</em>
						{/if}
					</div>
					<p class="indent-4">{post.description}</p>
                    <div class="flex flex-wrap gap-4 justify-center mt-4">
                        {#each post.categories as category, index}
                            <span class={`block w-fit h-fit`} aria-label={category}>
                                #{category}
                            </span>
                        {/each}
                    </div>
				</a>
			</li>
		{/each}
	</ul>
</section>