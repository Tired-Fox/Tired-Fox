<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="border-l border-solid border-zinc-800/50 dark:border-zinc-300/50 w-full">
	<div class="flex justify-end">
		<div class="grid grid-cols-[repeat(2,auto)] gap-x-4 w-fit h-fit fixed top-12 mb-8">
			<p class=" text-end">Zachary Boehm</p>
			<span
				class="border-x border-solid dark:border-zinc-300/50 border-zinc-800/50 pl-2 pr-4 text-start text-teal-500"
			>
				Name
			</span>
			<p class=" text-end">Software Developer</p>
			<span
				class="border-x border-solid dark:border-zinc-300/50 border-zinc-800/50 pl-2 pr-4 text-start text-teal-500"
			>
				Job
			</span>

			<p class=" text-end">Game Design</p>
			<span
				class="border-x border-solid dark:border-zinc-300/50 border-zinc-800/50 pl-2 pr-4 text-start text-teal-500"
			>
				Hobby
			</span>
		</div>
	</div>
	<section aria-labelledby="about" class="pl-4 my-6 relative">
		<span class="absolute w-2 h-2 rounded-full -translate-x-5 translate-y-4 bg-white"></span>
		<h2 id="about" class="text-2xl font-bold"><a href="#about">About</a></h2>
		<p>Have a Bachelor's in Computer Science</p>
		<p>Passionate about programming</p>
		<p>Strong interest in videogames and their development</p>
		<p>Goals with programming</p>
	</section>
	<section aria-labelledby="skills" class="pl-4 my-6 relative">
		<span class="absolute w-2 h-2 rounded-full -translate-x-5 translate-y-4 bg-white"></span>
		<h2 id="skills" class="text-2xl font-bold"><a href="#skills">Skills</a></h2>
		<p>Languages</p>
		<p>Software</p>
		<p>Technologies</p>
	</section>
	<section aria-labelledby="projects" class="pl-4 my-6 relative">
		<span class="absolute w-2 h-2 rounded-full -translate-x-5 translate-y-4 bg-white"></span>
		<h2 id="projects" class="text-2xl font-bold"><a href="#projects">Projects</a></h2>
		<p>Current Projects</p>
		<p>Planned Projects</p>
		<p>Finished Projects</p>
		<p class="h-screen">a;lsdkfj</p>
	</section>
</div>
