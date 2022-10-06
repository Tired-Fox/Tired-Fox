<template>
  <div>
    <SiteHeader />
    <NuxtPage />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBan, faTriangleExclamation, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion, faClipboard } from "@fortawesome/free-regular-svg-icons";

library.add(
  // Solid
  faBan,
  faCheck,
  faTriangleExclamation,

  // Regular
  faCircleQuestion,
  faClipboard,
);
</script>

