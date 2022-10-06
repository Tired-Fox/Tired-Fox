<script setup lang="ts">
  defineProps({
    href: {
      type: String,
      default: ''
    },
    blank: {
      type: Boolean,
      default: false
    }
  })

  const internal = (href: string): Boolean => {
    if (['#', '/'].includes(href[0]) && !href.startsWith('//')) {
      return true;
    } 
    return false;
  }
</script>

<template>
  <a v-if="internal(href)" :href="href">
    <slot />
  </a>
  <nuxt-link v-else :to="href" target="_blank">
    <slot />
  </nuxt-link>
</template>