<script setup lang="ts">
  import { getIcons, getTitle, getType } from '@/logic/Callouts';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  defineProps({
    toggle: {
      type: Boolean,
      default: null
    },
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'info',
    },
  })
</script>


<template>
  <!-- Collapsable  -->
  <div v-if="toggle" class="callout my-4" :class="[getType(type)]">
    <details :open="open">
      <summary class="callout-head flex items-center gap-4 not-prose">
        <CalloutHead 
          :type="getType(type)"
          :icon="getIcons(type)" 
          :title="title ? title : getTitle(type)"
        />
        <FontAwesomeIcon 
          class="ml-auto transition-transform duration-300 callout-toggle-icon"
          :icon="['fas', 'caret-left']"
        />
      </summary>
      <div class="p-3 prose mx-auto">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
    </details>
  </div>

  <!-- Always expanded -->
  <div v-else class="callout my-4" :class="[getType(type)]">
    <div class="callout-head flex items-center gap-4 m-0 p-0 not-prose">
      <CalloutHead 
        :type="getType(type)"
        :icon="getIcons(type)" 
        :title="title ? title : getTitle(type)"
      />
    </div>
    <div class="p-3 prose mx-auto">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  details[open] {
    .callout-toggle-icon {
      @apply -rotate-90;
    }
  }

  .callout {
    
    @apply rounded-md overflow-hidden shadow-md shadow-slate-300 border-2 border-solid;

    .callout-head {
      @apply px-4 h-[3rem] leading-none;
    }

    &.failure {
      @apply border-[#FF5252];
      .callout-head {
        @apply bg-[#FF5252]/10;
      }
    }

    &.info {
      @apply border-[#00B8D4];
      .callout-head {
        @apply bg-[#00B8D4]/10;
      }
    }

    &.note {
      @apply border-[#448AFF];
      .callout-head {
        @apply bg-[#448AFF]/10;
      }
    }

    &.tip {
      @apply border-[#00BFA5];
      .callout-head {
        @apply bg-[#00BFA5]/10;
      }
    }

    &.success {
      @apply border-[#03BF52];
      .callout-head {
        @apply bg-[#03BF52]/10;
      }
    }

    &.warning {
      @apply border-[#FF9100];
      .callout-head {
        @apply bg-[#FF9100]/10;
      }
    }

    &.danger {
      @apply border-[#FF1744];
      .callout-head {
        @apply bg-[#FF1744]/10;
      }
    }
    
    &.bug {
      @apply border-[#F50057];
      .callout-head {
        @apply bg-[#F50057]/10;
      }
    }

    &.example {
      @apply border-[#7C4DFF];
      .callout-head {
        @apply bg-[#7C4DFF]/10;
      }
    }
    
    &.quote {
      @apply border-[#9E9E9E];
      .callout-head {
        @apply bg-[#9E9E9E]/10;
      }
    }
    
    &.question {
      @apply border-[#64DD17];
      .callout-head {
        @apply bg-[#64DD17]/10;
      }
    }
  }
</style>