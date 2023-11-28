<script>
    import JamGithub from 'virtual:icons/jam/github';
    import JamRssFeed from 'virtual:icons/jam/rss-feed';

    import { page } from '$app/stores';
	import { baseUrl } from '$lib/config';
</script>

<footer class="text-zinc-400 dark:text-zinc-500 px-4 py-2 flex justify-between w-full max-w-[64rem] mx-auto mb-4">
    <div></div>
    <small aria-label="Copyright">&copy; 2023 Zachary Boehm. All Rights Reserved</small>
    <ul class="flex gap-3">
        <li>
            <a href="https://github.com/Tired-Fox" aria-label="Github" target="_blank" title="Github ⭷">
                <JamGithub />
            </a>
        </li>
        {#if $page.url.pathname.startsWith('/blog')}
        <li>
            <a href={`${baseUrl}/rss.xml`} aria-label="Blog RSS Feed" target="_blank" title="RSS Feed ⭷">
                <JamRssFeed />
            </a>
        </li>
        {/if}
    </ul>
</footer>

<style> 
    footer a {
        @apply hover:text-zinc-600 dark:hover:text-zinc-300;
    }
</style>