<script lang="ts">
  import { defineComponent } from '#imports'
  export default defineComponent({
    props: {
      code: {
        type: String,
        default: ''
      },
      language: {
        type: String,
        default: null
      },
      filename: {
        type: String,
        default: null
      },
      highlights: {
        type: Array as () => number[],
        default: () => []
      }
    }
  })
</script>

<template>
  <div class="relative code-block" >
    <span 
      v-if="language" 
      class="absolute top-1 right-2 px-1 z-10 text-slate-600"
    >
      {{language}}
    </span>
    <slot />
    <span 
      v-if="filename"
      class="code-filename absolute -bottom-1 -right-1 z-10 px-3 py-1 bg-zinc-700 rounded-lg shadow shadow-slate-900 text-white"
    >
      {{filename}}
    </span>
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>