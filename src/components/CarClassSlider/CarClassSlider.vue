<template>
  <div class="flex flex-col gap-4">
    <h4 class="font-[500] text-[20px]">Select Car Class</h4>

    <div class="carousel-wrapper">
      <Carousel
        :items-to-show="itemsToShow"
        :wrap-around="true"
        class="relative">
        <Slide v-for="slide in 4" :key="slide">
          <!-- Display 4 slides for flexibility -->
          <div class="carousel__item">
            <div>
              <CarCard />
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, watch } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import CarCard from "../CarCard/CarCard.vue";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
    CarCard,
  },
  data() {
    return {
      itemsToShow: 2, // Default value for larger screens
    };
  },
  computed: {
    // Calculate items to show based on screen width
    responsiveItemsToShow() {
      return window.innerWidth <= 768 ? 1.5 : 2; // Adjust breakpoint as needed
    },
  },
  mounted() {
    // Update itemsToShow on window resize
    window.addEventListener("resize", this.updateItemsToShow);
  },
  beforeUnmount() {
    // Remove event listener on component destroy
    window.removeEventListener("resize", this.updateItemsToShow);
  },
  methods: {
    updateItemsToShow() {
      this.itemsToShow = this.responsiveItemsToShow;
    },
  },
});
</script>

<style>
.carousel-wrapper {
  overflow: hidden;
}

button.carousel__next,
button.carousel__prev {
  top: -10% !important;
  z-index: 999 !important;
}

button.carousel__prev {
  left: auto !important;
  right: 50px !important;
}
</style>
