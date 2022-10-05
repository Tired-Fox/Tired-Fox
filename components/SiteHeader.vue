<template>
  <header class="sticky top-0 w-full p-4 bg-slate-100 bg-opacity-40 border-b-2 border-white border-opacity-30 backdrop-blur-lg z-20">
    <div class="flex items-center justify-between max-w-6xl m-auto">
      <NuxtLink to="/" class="no-underline">
        <figure class="font-black text-lg">
          <h1>Tired Fox</h1>
        </figure>
      </NuxtLink>
      <nav>
        <ul class="flex gap-2">
          <li>
            <NuxtLink to="/blog" class="no-underline">Blog</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>