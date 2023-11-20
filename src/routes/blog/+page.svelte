<script lang="ts">
    import { formatDate } from '$lib/utils.js';
    export let data;
</script>

<svelete:head>
    <title>Test Blog Posts</title>
</svelete:head>

<section aria-label="Blog posts">
    <ul class="posts">
        {#each data.posts as post}
        <li>
            <a href={post.slug} class="title">{post.title}</a>
            <p class="date">{formatDate(post.date)}</p>
            <p class="description">{post.description}</p>
        </li>    
        {/each}
    </ul>
</section>