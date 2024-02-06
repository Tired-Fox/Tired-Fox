<script>
	import ProjectCard from './ProjectCard.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<ul>
    {#each Object.entries(data.projects) as [name, info]}
    <ProjectCard name={name} info={info} />
    {:else}
        <li>&lt;No Projects /&gt;</li>
    {/each}
</ul>