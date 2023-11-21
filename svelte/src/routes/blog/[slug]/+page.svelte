<script lang="ts">
    import { formatDate } from "$lib/utils";

    export let data;
</script>

<!-- SEO -->
<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
    <hgroup>
        <h1 class="text-3xl font-bold">{data.meta.title}</h1>
        <em class="text-sm">Published at {formatDate(data.meta.date)}</em>
    </hgroup>

    <div class="flex gap-1">
        {#each data.meta.categories as category}
            <span class="bg-rose-400/50 px-2 rounded-full text-sm">&num;{category}</span>
        {/each}
    </div>

    <div class="prose mt-4">
        <svelte:component this={data.content} />
    </div>
</article>