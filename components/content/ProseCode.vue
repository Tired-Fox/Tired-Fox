<script setup lang="ts">
  const clipboard = ['far', 'clipboard']
  const checkmark = ['fas', 'check']
</script>

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
    },
    data() {
      return {
        icon: ['far', 'clipboard'],
        copyTimeout: null,
      }
    },
    methods: {
      copyCode () {
        navigator.clipboard.writeText(this.code.trim());
        this.icon = ['fas', 'check'];

        // If timeout already active clear it and reset the timeout
        if (this.copyTimeout) {
          clearTimeout(this.copyTimeout);
        }
        this.copyTimeout = setTimeout(()=> {
          this.icon = ['far', 'clipboard'];
          this.copyTimeout = null;
        },1500)
      }
    }
  })
</script>

<template>
  <div class="relative code-block" :class="{ filename_padding: filename }" >
    <span 
      v-if="language" 
      class="absolute bottom-0 right-[50%] translate-x-[50%] px-1 z-10 text-slate-600"
    >
      {{language}}
    </span>
    <slot />
    <span 
      v-if="filename"
      class="code-filename"
    >
      {{filename}}
    </span>
    <button 
      class="code-copy absolute border-none -bottom-1 -right-1 rounded z-10 bg-zinc-700 w-8 h-10 shadow-sm shadow-slate-600 "
      @click="copyCode"
    >
      <font-awesome-icon :icon="icon" class="text-zinc-200" />
    </button>
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}

.code-filename {
  @apply absolute z-10 px-3 py-1 top-1 right-2 rounded-lg text-slate-600;
  /* @apply xl:-bottom-1 xl:-right-1 xl:translate-x-[0] xl:bg-zinc-700 xl:shadow-sm xl:shadow-slate-900 xl:text-white; */
}

.code-block pre {
  padding-bottom: 1.75rem !important;
}
</style>