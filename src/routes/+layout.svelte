<script lang="ts">
	import '../app.pcss';
	import '../style.css';
    import '../highlight.css';

    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
</script>

<div class="app bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 min-h-screen flex flex-col">
	<Header />

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
</style>
