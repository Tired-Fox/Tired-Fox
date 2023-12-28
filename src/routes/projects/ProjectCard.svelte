<script>
    /** @type {String} */
    export let name;

    /** @type {{
        description: String,
        longDescription?: String,
        languages?: String[],
        link?: String
    }} */
    export let info;
</script>

<div class="flex items-center gap-2">
    <div class="w-[300px] h-[200px] rounded-md overflow-hidden shadow-sm shadow-black/30 mb-1">
        <img src="https://picsum.photos/300/200" alt="Cypress visual example"/>
    </div>
    <div class="flex-1 bg-zinc-100 dark:bg-zinc-800 p-2 shadow-sm shadow-black/30 rounded-md">
        <h1 class="text-2xl font-bold mb-4">{name}</h1>
        <p class="mb-2">{info.description}</p>
        {#each info.languages ?? [] as language}
            <span>#{language}</span>
        {/each}
        <a href={info.link} class="mt-4">See More</a>
    </div>
</div>

<style>
</style>