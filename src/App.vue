<template>
  <Navbar />
  <RouterView />
</template>

<script>
import Navbar from "../src/components/Navbar/Navbar.vue";

export default {
  components: { Navbar },
};
</script>
