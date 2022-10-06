<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
        navigator.clipboard.writeText(this.code);
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
    <button 
      class="code-copy absolute -bottom-1 -right-1 rounded z-10 bg-zinc-700 w-8 h-10"
      @click="copyCode"
    >
      <FontAwesomeIcon :icon="icon" class="text-zinc-200" />
    </button>
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>