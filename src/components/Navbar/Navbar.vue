<template>
  <nav :class="$style.parent">
    <div :class="$style.routerParent">
      <router-link to="/" :class="$style.routerLink">BLOG! </router-link>
    </div>
  </nav>
</template>

<script>
import style from "./Navbar.module.css";

export default {
  computed: {
    $style() {
      return style; // Expose the styles object to the template
    },
  },
};
</script>
