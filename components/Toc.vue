<script setup>
  // define links prop
  defineProps(["links", "currentSection"]);
  
  // flatten TOC links nested arrays to one array
  const flattenLinks = (links) => {
    let _links = links
      .map((link) => {
        let _link = [link];
        if (link.children) {
          // recursively flatten children links
          let flattened = flattenLinks(link.children);
          _link = [link, ...flattened];
        }
        return _link;
      })
      .flat(1);
    return _links;
  };
</script>
<template>
  <nav class="sticky top-20 p-4 rounded-lg max-h-[calc(100vh-6rem)] overflow-auto ml-10">
    <ul class="flex flex-col gap-1 px-2">
      <!-- render each link with depth class -->
      <li 
        v-for="link of flattenLinks(links)" 
        class="transition-all pl-4 py-1 border-l-2 border-solid border-slate-400 text-sm"
        :key="link.id" 
        :class="[
          `toc-link _${link.depth}`, 
          { 'active': currentSection === link.id }
        ]"
      >
        <a 
          :href="`#${link.id}`"
          class="no-underline hover:underline"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .active {
    @apply font-bold border-sky-600;
    color: rgb(2 132 199) !important;
  }

  .toc {
    @apply p-4 bg-slate-50 border border-slate-200 rounded-lg;
  }
  
  .toc-link {
    @apply text-slate-500;
  }
  .toc-link._3 {
    @apply ml-4;
  }
  .toc-link._4 {
    @apply ml-6;
  }
  .toc-link._undefined {
    @apply ml-8;
  }
</style>