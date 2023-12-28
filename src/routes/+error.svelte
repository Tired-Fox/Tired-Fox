<script>
	import { base } from '$app/paths';
    import { page } from '$app/stores';
</script>

<div class="flex-1 flex flex-col gap-8 justify-center items-center">
    <h1 class="text-5xl font-bold text-center">{$page.status ?? 500} {$page.error?.message ?? 'An unexpected error occured'}</h1>
    <a href={`${base}/`} class="hover:underline underline-offset-4">Back to Home</a>
</div>