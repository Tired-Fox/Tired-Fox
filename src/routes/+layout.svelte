<script>
	import "../app.pcss";
    import "../style.css";
</script>

<div class="app bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100">
	<main class="pb-[5rem]">
		<slot></slot>
	</main>

	<footer class="text-zinc-300 dark:text-zinc-600 px-4 py-2 flex justify-between bg-inherit sticky bottom-0 w-full">
        <small aria-label="Copyright">&copy; 2023 Zachary Boehm. All Rights Reserved</small>
        <ul>
            <li><a href="/blog">blog</a></li>
        </ul>
	</footer>
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
