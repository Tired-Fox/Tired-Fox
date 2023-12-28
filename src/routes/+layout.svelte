<script lang="ts">
	import '../app.pcss';
	import '../style.css';
	import '../highlight.css';

	import JamGithub from 'virtual:icons/jam/github';
	import JamRssFeed from 'virtual:icons/jam/rss-feed';
	import JamEnvelope from 'virtual:icons/jam/envelope-f';

	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="app bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 min-h-screen">
	<!-- <Header /> -->

	<main class="flex-1 grid gap-8">
		<aside class="h-0">
			<div class="md:fixed md:h-screen top-0 left-6 xl:left-12 w-full md:w-0 flex md:flex-col items-center md:py-[4rem] gap-6">
				<div class="flex md:flex-col items-center">
					<div class="flex flex-row-reverse md:flex-col justify-between items-center gap-4 md:gap-8">
						<a
							href={`${base}/blog`}
							class="text-zinc-800/50 hover:text-zinc-800 dark:text-zinc-300/50 dark:hover:text-zinc-300 md:-rotate-90"
						>
							Blog
						</a>
						{#if $page.url.pathname !== (base.length ? base : '/')}
							<a
								href={`${base}/`}
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
						<li class={$page.url.pathname.startsWith(`${base}/blog`) ? '' : 'hidden'}>
							<a
								href={`${base}/rss.xml`}
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
                        <li>
							<a
								href="mailto:zboehm104@gmail.com"
								title="Contact Me"
							>
								<JamEnvelope
									class="text-zinc-800/50 hover:text-zinc-800 dark:text-zinc-300/50 dark:hover:text-zinc-300 scale-75"
								/>
							</a>
						</li>
					</ul>
					<small class="md:-rotate-90 flex gap-1 text-zinc-800/50 dark:text-zinc-300/50"
						>[<a href={`${base}/credits`} class="text-sky-500/50">&copy;2023</a>]</small
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
        grid-template-rows: 0 auto;
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
        grid-template-rows: auto;
		}
	}
</style>
