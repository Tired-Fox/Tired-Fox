<script setup>
  // get current route slug
  const {
    params: { slug },
  } = useRoute();
  
  // get array of filters by generating array from separating slug`,`
  const filter = slug.split(",");
  
  // set meta for page
  useHead({
    title: `All articles with ${slug}`,
    meta: [{ name: "description", content: "Here's a list of all my great articles" }],
  });
  </script>
  <template>
    <main>
      <header class="p-12 bg-slate-50">
        <div class="max-w-3xl m-auto">
          <h1 class="text-5xl font-extrabold">All articles with "{{ slug }}"</h1>
          <p class="font-medium text-lg">Here's a list of all my great articles</p>
        </div>
      </header>
      <section class="p-4 py-8 m-auto max-w-3xl">
        <!-- Render list of all articles in ./content/articles using `path` -->
        <Tags />
        <!-- Provide only defined fieldsin the `:query` prop -->
        <ContentList
          path="/articles"
          :query="{
            only: ['title', 'description', 'tags', '_path', 'img'],
            where: {
              tags: {
                $contains: filter,
              },
            },
            $sensitivity: 'base',
          }"
        >
          <!-- Default list slot -->
          <template v-slot="{ list }">
            <ul class="flex flex-col gap-6">
              <li v-for="article in list" :key="article._path" class="pt-6 first-of-type:border-none border-t border-slate-200">
                <NuxtLink :to="article._path" class="no-underline">
                  <div class="flex items-start gap-4">
                    <div class="img-cont w-32">
                      <img :src="`${article.img}`" :alt="article.title" class="rounded-lg max-h-[8rem]" />
                    </div>
                    <header>
                      <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                      <p>{{ article.description }}</p>
                      <ul class="article-tags">
                        <li class="tag" v-for="(tag, n) in article.tags" :key="n">
                          <NuxtLink :to="`/articles/tags/${tag}`" class="underline"> {{ tag }} </NuxtLink>
                        </li>
                      </ul>
                    </header>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </template>
          <!-- Not found slot to display message when no content us is found -->
          <template #not-found>
            <p>No articles found.</p>
          </template>
        </ContentList>
      </section>
    </main>
</template>