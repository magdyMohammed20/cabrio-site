<template>
  <nav>
    <ul :class="$style.parent">
      <li>
        <button
          @click="previousPage"
          :disabled="PostStore.currentPage <= 1"
          :class="$style.prevBtn">
          <svg
            :class="$style.svg"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
        </button>
      </li>
      <li v-for="page in PostStore.totalPages" :key="page">
        <button
          @click="goToPage(page)"
          :class="[
            $style.middleBtn,
            { [$style.activeBtn]: page === PostStore.currentPage },
            { [$style.nonActiveBtn]: page !== PostStore.currentPage },
          ]">
          {{ page }}
        </button>
      </li>

      <li>
        <button
          @click="nextPage"
          :disabled="PostStore.currentPage >= PostStore.totalPages"
          :class="$style.nextBtn">
          <svg
            :class="$style.svg"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { usePostStore } from "../../stores/PostStore";
import { useRouter } from "vue-router";
import style from "./Pagination.module.css";

export default {
  setup() {
    const PostStore = usePostStore();
    const router = useRouter();

    const previousPage = () => {
      if (PostStore.currentPage > 1) {
        PostStore.currentPage -= 1;
        // Fetch posts for the previous page
        PostStore.getPosts(PostStore.currentPage);
        navigateToPage(PostStore.currentPage);
      }
    };

    const nextPage = () => {
      if (PostStore.currentPage < PostStore.totalPages) {
        PostStore.currentPage += 1;
        // Fetch posts for the next page
        PostStore.getPosts(PostStore.currentPage);
        navigateToPage(PostStore.currentPage);
      }
    };

    const goToPage = (page) => {
      if (
        page !== PostStore.currentPage &&
        page >= 1 &&
        page <= PostStore.totalPages
      ) {
        PostStore.currentPage = page;
        // Fetch posts for the selected page
        PostStore.getPosts(page);
        navigateToPage(page);
      }
    };

    const navigateToPage = (page) => {
      router.push({ name: "posts", params: { page: page } });
    };
    PostStore.getPosts();

    console.log(PostStore);
    return { PostStore, previousPage, nextPage, goToPage };
  },
  computed: {
    $style() {
      return style; // Expose the styles object to the template
    },
  },
};
</script>
