<script lang="ts">
	import '../app.pcss';
	import '../style.css';
    import '../highlight.css';

	import { page } from '$app/stores';
    import Footer from './footer.svelte';

	$: route = $page.url.pathname;

	let drawer: HTMLDivElement | undefined;
	$: showDrawer = false;

	function toggleDrawer() {
		showDrawer = !showDrawer;
	}
</script>

<div class="app bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 min-h-screen flex flex-col">
	<header on:input={(key) => console.log(key)} class="sticky top-0 w-full">
		<div class="w-full max-w-[64rem] mx-auto p-4 flex justify-between">
			<div></div>
			<button
				type="button"
				class="z-30 w-8 h-8 flex items-center justify-center"
				on:click={toggleDrawer}
				title="Toggle menu"
			>
                <div id="menu-icon" data-open={showDrawer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
			</button>
			<div
				bind:this={drawer}
				inert={showDrawer ? undefined : true}
				data-show={showDrawer ? '' : undefined}
				id="drawer"
				class="absolute top-0 left-0 z-20 h-screen w-full px-4 pt-4 overflow-y-auto transition-transform duration-300 -translate-y-full data-[show]:translate-y-0 bg-zinc-100 dark:bg-zinc-800 rounded-b-md shadow-md"
				aria-labelledby=""
			>
				<div class="max-w-[64rem] mx-auto h-full flex flex-col">
					<a href="/" on:click={toggleDrawer} class="block w-fit">
						<h3 class="text-2xl font-bold flex flex-col w-fit">
							<span class="w-fit">Zachary</span>
							<span class="ml-8 w-fit">Boehm</span>
						</h3>
					</a>
					<nav class="flex-1 flex flex-col justify-center items-center">
						<ul class="flex flex-col gap-6">
							<li>
								<a
									class="aria-[current]:underline w-fit"
									href="/blog"
									on:click={toggleDrawer}
									aria-current={route === '/blog' ? 'page' : undefined}
								>
									Blog
								</a>
							</li>
                            <li>
                                <a
									class="aria-[current]:underline w-fit"
									href="/about"
									on:click={toggleDrawer}
									aria-current={route === '/about' ? 'page' : undefined}
								>
									About
								</a>
                            </li>
						</ul>
					</nav>
                    <Footer />
				</div>
			</div>
		</div>
	</header>

	<main class="flex-1 flex flex-col">
		<slot />
	</main>
    
    <Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	button > svg {
		width: 100%;
		height: 100%;
	}

	#drawer {
		background-size: 30px 30px;
		background-image: linear-gradient(to right, rgb(63 63 70 / 0.25) 1px, transparent 1px),
			linear-gradient(to bottom, rgb(63 63 70 / 0.25) 1px, transparent 1px);
		background-position: -15px -18px;
	}

    #drawer nav a {
        @apply text-4xl aria-[current]:underline w-fit;
    }

    #menu-icon > span {
        @apply bg-zinc-800 dark:bg-zinc-100;
        display: block;
        height: .15rem;
        width: 1.5rem;
        margin-block: .3rem;
        transition: transform .2s;
    }
    #menu-icon > span:nth-child(odd) {
        width: .75rem;
    }
    #menu-icon > span:last-child {
        margin-left: .75rem;
    }
    #menu-icon[data-open=true] > span {
        margin-block: 0;
    }
    #menu-icon[data-open=true] > span:nth-child(1) {
        transform: translate(.1rem, -.1rem) rotate(45deg);
    }
    #menu-icon[data-open=true] > span:nth-child(3) {
        transform: translate(-.1rem, .1rem) rotate(45deg);
    }
    #menu-icon[data-open=true] > span:nth-child(2) {
        transform: rotate(-45deg);
    }
</style>
