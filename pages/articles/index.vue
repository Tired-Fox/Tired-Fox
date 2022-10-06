<script setup>
  // set meta for page
  useHead({
    title: "All articles",
    meta: [{ name: "description", content: "Here's a list of all my great articles" }],
  });
</script>
<template>
  <main>
    <header class="p-12 bg-slate-50">
      <div class="max-w-3xl m-auto">
        <h1 class="text-5xl font-extrabold">All articles</h1>
        <p class="font-medium text-lg">Here's a list of all my great articles</p>
      </div>
    </header>
    <section class="p-4 py-8 m-auto max-w-3xl">
      <!-- Render list of all articles in ./content/articles using `path` -->
      <Tags />
      <!-- Provide only defined fields in the `:query` prop -->
      <ContentList
        path="/articles"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="flex flex-col gap-6">
            <li v-for="article in list" :key="article._path" class="pt-6 first-of-type:border-none border-t border-slate-200">
              <NuxtLink :to="article._path" class="no-underline">
                <div class="flex items-start gap-4">
                  <!-- <div v-if="article.img" class="w-32">
                    <img
                      :src="`${article.img}`"
                      :alt="article.title" class="rounded-lg w-full h-full object-cover" />
                  </div>
                  <div v-else class="w-32"></div> -->
                  <header>
                    <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <ul class="article-tags">
                      <li class="tag !py-0.5" v-for="(tag, n) in article.tags" :key="n">{{ tag }}</li>
                    </ul>
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>

        <!-- slot to display message when no content is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>