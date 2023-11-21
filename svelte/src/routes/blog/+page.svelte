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
        <li class="w-full">
            <a href={`/blog/${post.slug}`} class="block mb-2 text-emerald-700 font-bold text-lg hover:text-emerald-300">{post.title}</a>
            <p class="date">{formatDate(post.date)}</p>
            <p class="description">{post.description}</p>
        </li>    
        {/each}
    </ul>
</section>