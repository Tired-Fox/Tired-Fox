<script lang="ts">
	import type { Post } from "$lib/types";
	import { formatDate } from "$lib/utils";

    export let post: Post;
    export let featured: Boolean;
</script>

<li class={`article ${featured?'featured':''}`}>
    <a href={`/blog/${post.slug}`} class="grid gap-4" aria-label={`Go to article named ${post.title}`}>
        <h3 class="title text-2xl font-bold mb-3">{post.title}</h3>
        <div class="image w-full h-full overflow-hidden rounded-md shadow-sm shadow-black">  
            <img src={post.hero} alt="Hero" class="object-cover w-full h-full"/>
        </div>
        <article class="content prose dark:prose-invert max-w-none">
            <div class="border-b border-current/50 pb-1">{formatDate(post.updated || post.published)}</div>
            {#if post.preview}
                <p>{post.preview}</p>
            {/if}
        </article>
    </a>
</li>

<style>
    article {
        hyphens: auto;
    }
    article p::first-letter {
        initial-letter: 2;
        padding-right: .5em;
    }
    

    .article a {
        grid-template-columns: repeat(4, auto);
        grid-template-rows: repeat(4, auto);
    }
    .article {
        min-height: 10rem;
    }
    .article .image {
        max-height: 25rem;
    }
    .article .image img {
        object-fit: cover;
    }

    .article .content {
        --webkit-columns: 1;
        --moz-columns: 1;
        columns: 1;
        column-gap: 3rem;
    }

    .article {
        grid-column: 1/-1;
    }
    .article .image {
        grid-column: 1/-1;
    }
    .article .title {
        grid-column: 1/-1;
    }
    .article .content {
        grid-column: 1/-1;
    }

    .article .image {
        @apply hidden;
    }


    @media only screen and (min-width: 786px) {
        .article .image {
            @apply block;
        }
        .article .content {
            --webkit-colulmns: 2;
            --moz-columns: 2;
            columns: 2;
        }
        .article:nth-child(n+2) .content {
            --webkit-colulmns: 1;
            --moz-columns: 1;
            columns: 1;
        }
        .article:nth-child(3n + 2) {
            @apply border dark:border-zinc-300/70 border-zinc-800/70 pl-8 pt-8;
            grid-column: 1/2;
        }
        .article:nth-child(3n + 2) .image {
            @apply hidden;
        }
        .article:nth-child(3n + 2) .title {
            grid-row: 1;
            grid-column: 1/3;
        }
        .article:nth-child(3n + 2) .content {
            grid-row: 2;
            grid-column: 1/3;
        }

        .article:nth-child(3n + 3) {
            @apply border dark:border-zinc-300/70 border-zinc-800/70 pr-8 pt-8;
            grid-column: 2/-1;
        }
        .article:nth-child(3n + 3) .image {
            @apply hidden;
        }
        .article:nth-child(3n + 3) .title {
            grid-row: 1;
            grid-column: 3/-1;
        }
        .article:nth-child(3n + 3) .content {
            grid-row: 2;
            grid-column: 3/-1;
        }

        

        .article:nth-child(8n + 1) {
            grid-column: 1/3;
        }
        .article:nth-child(8n + 1) .image {
            grid-row: 1/5;
            grid-column: 1/3;
            aspect-ratio: 5/4;
        }
        .article:nth-child(8n + 1) .title {
            grid-row: 1/2;
            grid-column: 3/-1;
        }
        .article:nth-child(8n + 1) .content {
            grid-row: 2/5;
            grid-column: 3/-1;
        }

        .article:nth-child(8n + 4) {
            grid-column: 1/3;
            border-top: none;
        }
        .article:nth-child(8n + 4) .image {
            grid-row: 1/5;
            grid-column: 3/-1;
            aspect-ratio: 5/4;
        }
        .article:nth-child(8n + 4) .title {
            grid-row: 1/2;
            grid-column: 1/3;
        }
        .article:nth-child(8n + 4) .content {
            grid-row: 2/5;
            grid-column: 1/3;
        }
        .featured.article  {
            grid-column: 1/3;
        }
        .featured.article .image {
            grid-row: 1/3;
            grid-column: 1/-1;
        }
        .featured.article .title {
            grid-row: 3/4;
            grid-column: 1/-1;
        }
        .featured.article .content {
            grid-row: 4/5;
            grid-column: 1/-1;
        }
    }
</style>