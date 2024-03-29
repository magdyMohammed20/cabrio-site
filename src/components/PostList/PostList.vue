<template>
  <div :class="$style.parent">
    <h1 :class="$style.title">
      <i class="material-icons text-blue-600"> deblur </i> Blog Posts
    </h1>
    <div v-if="PostStore.posts.length == 0">
      <Loader />
    </div>
    <div v-else :class="$style.blogCardParent">
      <BlogCard v-for="post in PostStore.posts" :post="post"></BlogCard>
    </div>
    <div :class="$style.paginationParent">
      <Pagination />
    </div>
  </div>
</template>

<script>
import Pagination from "../Pagination/Pagination.vue";
import style from "./PostList.module.css";
import { usePostStore } from "../../stores/PostStore";
import BlogCard from "../BlogCard/BlogCard.vue";
import Loader from "../Loader/Loader.vue";
export default {
  components: { BlogCard, Loader, Pagination },
  setup() {
    const PostStore = usePostStore();

    PostStore.getPosts();

    return { PostStore };
  },
  computed: {
    $style() {
      return style; // Expose the styles object to the template
    },
  },
};
</script>
