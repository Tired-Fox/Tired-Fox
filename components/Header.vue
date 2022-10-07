

<template>
  <header class="sticky top-0 w-full p-4 bg-slate-100 bg-opacity-40 border-b-2 border-white border-opacity-30 backdrop-blur-lg z-20">
    <div class="flex items-center justify-between max-w-6xl m-auto">
      <div class="flex gap-8 items-center">
        <NuxtLink to="/" class="no-underline">
          <h1 class="text-lg font-black">Tired Fox</h1>
        </NuxtLink>
      </div>
      <nav>
        <ul class="flex gap-2">
          <li>
            <NuxtLink to="/articles" class="no-underline text-orange-600">Articles</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>