<script lang="ts">
    import type { Post } from "$lib/types";
	import { formatDate } from "$lib/utils";

    export let post: Post;
</script>

<li class="block w-full feature">
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
    <div class="w-full h-fit my-8 overflow-hidden rounded-md shadow-sm shadow-black">  
        <img src={post.hero} alt="Hero Image" class="aspect-[16/7]"/>
    </div>
    <div class="article prose dark:prose-invert max-w-none columned">
        {#if post.preview}
            <p>{post.preview}</p>
        {/if}
    </div>
    
</li>


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