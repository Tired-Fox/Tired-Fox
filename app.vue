<template>
  <div>
    <SiteHeader />
    <NuxtPage />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBan, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

library.add(
  faBan,
  faTriangleExclamation,
  faCircleQuestion
);
</script>

