<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  defineProps({
    type: {
      type: String,
      required: true,
    },
    icon: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <FontAwesomeIcon :icon="icon" class="callout-icon text-xl w-[1.25rem]" :class="[type]" />
  <p><strong class="font-bold">{{title}}</strong></p>
</template>

<style lang="scss">
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