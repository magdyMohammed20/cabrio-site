<template>
  <section :class="$style.parent">
    <div :class="$style.innerParent">
      <div :class="$style.contentContainer">
        <h1 :class="$style.title">404</h1>
        <p :class="$style.firstMsg">Something's missing.</p>
        <p :class="$style.secondMsg">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <button @click="navigateToPage" :class="$style.homeBtn">
          Back to Homepage
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { useRouter } from "vue-router";

import style from "./NotFound.module.css";

export default {
  setup() {
    const router = useRouter();
    const navigateToPage = () => {
      router.push({ name: "posts", params: { page: 1 } });
    };

    return { navigateToPage };
  },
  computed: {
    $style() {
      return style; // Expose the styles object to the template
    },
  },
};
</script>
