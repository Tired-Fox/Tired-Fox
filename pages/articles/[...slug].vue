<script setup>
  const { path } = useRoute();
  const { data, error } = await useAsyncData(`content-${path}`, async () => {
  
    // fetch document where the document path matches with the cuurent route
    let article = queryContent().where({ _path: path }).findOne();
  
    // get the surround information,
    // which is an array of documeents that come before and after the current document
    let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);
  
    return {
      article: await article,
      surround: await surround,
    };
  });
  
  // destrucure `prev` and `next` value from data
  const [prev, next] = data.value.surround;
  const currentSection = ref('');

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            currentSection.value = entry.target.getAttribute('id');
            console.log(entry.target);
          }
        })
      },
      {
        rootMargin: '0px 0px -90% 0px',
      }
    )
    document.querySelectorAll('article h2, article h3').forEach((section) => {
      observer.observe(section);
    })
  })
  
  // set the meta
  useHead({
    title: data.value.article.title,
    meta: [
      { name: "description", content: data.value.article.description },
      {
        hid: "og:image",
        property: "og:image",
        content: `https://site.com/${data.value.article.img}`,
      },
    ],
    script: [
      { src: 'https://polyfill.io/v3/polyfill.min.js?features=es6'},
      { 
        id: 'MathJax-sript', 
        async: true, 
        src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
      }
    ]
  });
</script>

<template>
  <!-- <Post :data="data" :prev="prev" :next="next" /> -->
  <main id="main" class="article-main">
      <header v-if="data.article" class="article-header">
        <div v-if="data.article.img" class="h-72 mb-10">
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
        <aside class="col-span-full md:col-span-2 row-start-1 w-full pt-14">
          <Toc :links="data.article.body.toc.links" :currentSection="currentSection" />
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
  .article {
    @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto;
  }
</style>