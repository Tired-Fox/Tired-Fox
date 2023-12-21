<script lang="ts">
	import { page } from '$app/stores';
    import Footer from './Footer.svelte';

	$: route = $page.url.pathname;
    $: showDrawer = false;

    function toggleDrawer() {
        showDrawer = !showDrawer;
    }
</script>

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
                                class="aria-[current]:underline w-fit hover:text-rose-500"
                                href="/blog"
                                on:click={toggleDrawer}
                                aria-current={route === '/blog' ? 'page' : undefined}
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                class="aria-[current]:underline w-fit hover:text-violet-500"
                                href="/projects"
                                on:click={toggleDrawer}
                                aria-current={route === '/projects' ? 'page' : undefined}
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                </nav>
                <Footer />
            </div>
        </div>
    </div>
</header>

<style>
	#drawer {
		background-size: 30px 30px;
		background-image: linear-gradient(to right, rgb(63 63 70 / 0.25) 1px, transparent 1px),
			linear-gradient(to bottom, rgb(63 63 70 / 0.25) 1px, transparent 1px);
		background-position: -15px -18px;
	}

    #drawer nav a {
        @apply text-4xl aria-[current]:underline w-fit;
    }

    #menu-icon {
        @apply bg-zinc-100 dark:bg-zinc-800 p-2 rounded-full;
    }
    #menu-icon span {
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