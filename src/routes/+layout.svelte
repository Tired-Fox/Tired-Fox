<script lang="ts">
	import '../app.pcss';
	import '../style.css';
	import '../highlight.css';

	import JamGithub from 'virtual:icons/jam/github';
	import JamRssFeed from 'virtual:icons/jam/rss-feed';

	import { page } from '$app/stores';
	import { baseUrl } from '$lib/config';
</script>

<div class="app bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 min-h-screen">
	<!-- <Header /> -->

	<main class="flex-1 grid gap-8">
		<aside>
			<div class="md:fixed md:h-screen top-0 left-6 xl:left-12 w-full md:w-0 flex md:flex-col items-center md:py-[4rem] gap-6">
                <span class="flex-1 h-[2px] md:w-[2px] md:h-auto text-transparent bg-zinc-800/50 dark:bg-zinc-300/50 rounded-full"
                >-</span>
				<div class="flex md:flex-col items-center">
					<div class="flex md:flex-col justify-between items-center gap-4 md:gap-8">
						<a
							href="/blog"
							class="text-zinc-800/50 hover:text-zinc-800 dark:text-zinc-300/50 dark:hover:text-zinc-300 md:-rotate-90"
						>
							Blog
						</a>
						{#if $page.url.pathname !== '/'}
							<a
								href="/"
								class="text-zinc-800/50 hover:text-zinc-800 dark:text-zinc-300/50 dark:hover:text-zinc-300 md:-rotate-90 md:mt-2"
							>
								Home
							</a>
						{/if}
					</div>
				</div>
                <div class="flex-1"></div>
				<div class="flex md:flex-col gap-12 items-center md:pb-4">
					<ul class="flex md:flex-col items-center gap-3">
						<li class={$page.url.pathname.startsWith('/blog') ? '' : 'hidden'}>
							<a
								href={`${baseUrl}/rss.xml`}
								aria-label="Blog RSS Feed"
								target="_blank"
								title="RSS Feed ⭷"
							>
								<JamRssFeed
									class="text-zinc-800/50 hover:text-zinc-800 dark:text-zinc-300/50 dark:hover:text-zinc-300 scale-75"
								/>
							</a>
						</li>
						<li>
							<a
								href="https://github.com/Tired-Fox"
								aria-label="Github"
								target="_blank"
								title="Github ⭷"
							>
								<JamGithub
									class="text-zinc-800/50 hover:text-zinc-800 dark:text-zinc-300/50 dark:hover:text-zinc-300 scale-75"
								/>
							</a>
						</li>
					</ul>
					<small class="md:-rotate-90 flex gap-1 text-zinc-800/50 dark:text-zinc-300/50"
						>[<span>&copy;2023</span>]</small
					>
				</div>
			</div>
		</aside>
		<div class="flex md:py-8 pb-8">
			<slot />
		</div>
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.link-vert {
		writing-mode: vertical-rl;
		font-weight: bold;
	}

	main {
		flex: 1;
		grid-template-columns: auto;
		padding-block: 1rem;
		padding-inline: 2rem;
		width: 100%;
		max-width: 75rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
	@media (min-width: 786px) {
		main {
			grid-template-columns: fit-content(40%) auto;
		}
	}
</style>
