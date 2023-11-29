<script>
	import JamGithub from 'virtual:icons/jam/github';
	import JamRssFeed from 'virtual:icons/jam/rss-feed';

	import { page } from '$app/stores';
	import { baseUrl } from '$lib/config';
</script>

<footer
	class="flex justify-between w-full max-w-[64rem] px-4 py-2 mx-auto my-4 text-zinc-400 dark:text-zinc-500"
>
	<div></div>
	<small aria-label="Copyright">&copy; 2023 Zachary Boehm. All Rights Reserved</small>
	<ul class="flex gap-3">
		<li>
			<a href="https://github.com/Tired-Fox" aria-label="Github" target="_blank" title="Github ⭷">
				<JamGithub class="text-violet-500" />
			</a>
		</li>
		<li class={$page.url.pathname.startsWith('/blog') ? '' : 'hidden'}>
            <a
                href={`${baseUrl}/rss.xml`}
                aria-label="Blog RSS Feed"
                target="_blank"
                title="RSS Feed ⭷"
            >
                <JamRssFeed class="text-orange-500" />
            </a>
        </li>
	</ul>
</footer>

<style>
	footer a {
		@apply hover:text-zinc-600 dark:hover:text-zinc-300;
	}
</style>
