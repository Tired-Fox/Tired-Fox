<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  const getCopyrightDates = () => {
    const currentYear: number = new Date().getFullYear();

    if (currentYear === 2022) {
      return "2022"
    } else {
      return `2022-${currentYear}`
    }
  }
</script>

<template>
  <footer class="flex justify-evenly my-3 flex-col md:flex-row w-[90%] mx-auto">
    <div class="flex gap-3 items-center">
      <nuxt-link to="https://github.com/Tired-Fox" title="Tired-Fox Github" aria-label="Open tired fox github">
        <FontAwesomeIcon :icon="['fab', 'github']" class="hover:text-indigo-600" />
      </nuxt-link>
      <nuxt-link href="https://www.twitch.tv/tiredfoxd" title="Tired-Fox Twitch" aria-label="Open tired fox twitch">
        <FontAwesomeIcon :icon="['fab', 'twitch']" class="hover:text-purple-600" />
      </nuxt-link>
    </div>
    <p>&copy; {{getCopyrightDates()}} Zachary Boehm. All Rights Reserved.</p>
    <div></div>
  </footer>
</template>