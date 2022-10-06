<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";

// Solid
import { 
  faTriangleExclamation,
  faCheck,
  faCaretLeft,
  faCircleInfo,
  faXmark,
  faCircleQuestion,
  faPencil,
  faFireFlameCurved,
  faBolt,
  faBug,
  faVial,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

// Regular
import {
  faClipboard 
} from "@fortawesome/free-regular-svg-icons";

import {
  faGithub,
  faTwitch
} from "@fortawesome/free-brands-svg-icons";

library.add(
  // Solid
  faCheck,
  faCircleInfo,
  faCaretLeft,
  faTriangleExclamation,
  faXmark,
  faCircleQuestion,
  faPencil,
  faFireFlameCurved,
  faBolt,
  faBug,
  faVial,
  faQuoteRight,

  // Regular
  faClipboard,

  // Brands
  faGithub,
  faTwitch,
);
</script>

