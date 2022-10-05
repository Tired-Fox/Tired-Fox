<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  const props = defineProps({
    icon: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  });
</script>

<template>
  <FontAwesomeIcon :icon="props.icon" />
  {{props.title}}
</template>