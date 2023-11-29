<script lang="ts">
	import { formatDate } from '$lib/utils';

	import JamCalendar from 'virtual:icons/jam/calendar';
	import JamWrite from 'virtual:icons/jam/write';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<h1 class="text-3xl font-bold mb-4">{data.meta.title}</h1>

	<div class="flex gap-1">
        <span class={`flex gap-2 ${data.meta.published ? '' : 'hidden'}`}>
            <em class={`text-sm flex gap-2`}>
                {formatDate(data.meta.published)} 
            </em>
        </span>
        <span class={`flex gap-2 ${data.meta.updated ? '' : 'hidden'}`}>
            <em class={`text-sm flex gap-2`}>
               ~ {formatDate(data.meta.updated)}
            </em>
        </span>
	</div>

	<div class="flex gap-4 mt-2">
		{#each data.meta.categories as category}
			<span class="text-sm">&num;{category}</span>
		{/each}
	</div>

	<hr class="my-4 border-zinc-800/50 dark:border-zinc-100/50" />
	<div class="prose mt-4">
		<svelte:component this={data.content} />
	</div>
</article>
