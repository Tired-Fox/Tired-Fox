<!-- ./components/PrevNext.vue -->

<script setup>
  // import icons
  import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";
  // define prev and next props
  defineProps(["prev", "next"]);
</script>

<template>
  <ul class="flex gap-4 justify-between p-4 border border-slate-200 rounded-lg">
    <li class="link-item">
      <NuxtLink v-if="prev" :to="prev._path">
        <ArrowLeftIcon class="w-5 stroke-slate-500" />
        <span> {{ prev.title }} </span>
      </NuxtLink>
    </li>
    <li class="link-item">
      <NuxtLink v-if="next" :to="next._path">
        <span> {{ next.title }} </span>
        <ArrowRightIcon class="w-5 stroke-slate-500" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.link-item a {
  @apply flex gap-2 no-underline hover:underline;
}
</style>