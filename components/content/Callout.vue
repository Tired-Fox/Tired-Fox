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
  <ClientOnly>
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
  @import "../../assets/styles/callouts.scss";
  
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
    
    @each $type, $color in $colors {
      &.#{$type} {
        @apply border-[#{$color}];
        .callout-head {
          @apply bg-[#{$color}]/10;
        }
      }
    }
  }

  .callout-icon {
    @each $type, $color in $colors {
      &.#{$type} {
        @apply text-[#{$color}];
      }
    }
  }
</style>