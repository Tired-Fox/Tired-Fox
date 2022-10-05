<script setup>
  const { data } = defineProps({
    data: {
      type: Object,
      required: true,
    },
    prev: {
      type: Object,
      default: null,
    },
    next: {
      type: Object,
      default: null,
    }
  });
</script>

<template>
  <main id="main" class="article-main">
      <header v-if="data.article" class="article-header">
        <div class="h-72 mb-10">
          <img :src="`${data.article.img}`" :alt="data.article.title" class="h-full w-full object-cover rounded-xl" />
        </div>
        <h1 class="heading">{{ data.article.title }}</h1>
        <p class="supporting">{{ data.article.description }}</p>
        <ul class="article-tags">
          <li class="tag" v-for="(tag, n) in data.article.tags" :key="n">{{ tag }}</li>
        </ul>
      </header>
      <hr />
      <section class="article-section">
        <aside class="aside">
          <Toc :links="data.article.body.toc.links" class="sticky top-20" />
        </aside>
        <article class="article">
          <!-- render document coming from query -->
          <ContentRenderer :value="data.article">
            <!-- render rich text from document -->
            <ContentRendererMarkdown :value="data.article" />
            <!-- display if document content is empty -->
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </article>
      </section>
      <PrevNext v-if="prev || next" :prev="prev" :next="next" />
    </main>
</template>

<style scoped>
  .article-main {
    @apply p-4 max-w-5xl m-auto;
  }
  .article-header {
    @apply p-4 pb-12;
  }
  .article-header .heading {
    @apply font-extrabold text-5xl;
  }
  .article-header .supporting {
    @apply font-medium text-lg;
  }
  .article-section {
    @apply grid grid-cols-8;
  }
  .aside {
    @apply col-span-full md:col-span-2 row-start-1 w-full pt-14;
  }
  .aside .toc {
    @apply sticky top-20;
  }
  .article {
    @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto;
  }
</style>