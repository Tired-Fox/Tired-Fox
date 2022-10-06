<script setup lang="ts">
  import { getIcons, getTitle, getType } from '@/logic/Callouts';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  const props = defineProps({
    toggle: {
      type: Boolean,
      default: false
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

  
  const expand = ref(props.open);

  const toggleCollapse = () => {
    console.log("Toggle Collapse");
  }
</script>

<template>
  <!-- Collapsable  -->
  <ClientOnly aria-placeholder="Loading...">
    <div v-if="toggle" class="callout my-4" :class="[getType(type)]">
      <div 
        class="callout-head flex items-center gap-4 not-prose cursor-pointer"
        @click="expand = !expand"  
      >
          <!-- <CalloutHead 
            :type="getType(type)"
            :icon="getIcons(type)" 
            :title="title ? title : getTitle(type)"
          /> -->
          <FontAwesomeIcon :icon="getIcons(type)" class="callout-icon text-xl w-[1.25rem]" :class="[type]" />
          <p>
            <strong class="font-bold">
              {{ title ? title : getTitle(type) }}
            </strong>
          </p>
          <FontAwesomeIcon
            class="ml-auto transition-transform callout-toggle-icon"
            :icon="['fas', 'caret-left']"
            :class="{'rotate-icon': expand}"
          />
        </div>
        <div 
          class="prose mx-auto h-0 overflow-hidden"
          :class="{'expand': expand}"
        >
          <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
    </div>

    <!-- Always expanded -->
    <div v-else class="callout my-4" :class="[getType(type)]">
      <div class="callout-head flex items-center gap-4 m-0 p-0 not-prose">
        <FontAwesomeIcon :icon="getIcons(type)" class="callout-icon text-xl w-[1.25rem]" :class="[type]" />
        <p><strong class="font-bold">{{title ? title : getTitle(type)}}</strong></p>
      </div>
      <div class="p-3 prose mx-auto">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
    </div>  

    <template #placeholder>
      <p>Loading...</p>
    </template>
  </ClientOnly>
</template>

<style scoped lang="scss">
  .rotate-icon {
    @apply -rotate-90;
  }

  .expand {
    @apply h-fit p-3;
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

  .callout-icon {
    &.note {
      @apply text-[#448AFF];
    }
    &.info {
      @apply text-[#00B8D4];
    }
    &.tip {
      @apply text-[#00BFA5];
    }
    &.failure {
      @apply text-[#FF5252];
    }

    &.success {
      @apply text-[#03BF52];
    }
    &.warning {
      @apply text-[#FF9100];
    }
    &.danger {
      @apply text-[#FF1744];
    }
    &.bug {
      @apply text-[#F50057];
    }
    &.example {
      @apply text-[#7C4DFF];
    }
    &.quote {
      @apply text-[#9E9E9E];
    }
    &.question {
      @apply text-[#64DD17];
    }
  }
</style>