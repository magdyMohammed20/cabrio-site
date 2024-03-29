<template>
  <div>
    <div v-if="PostStore.loading">
      <Loader />
    </div>

    <div v-if="PostStore.post">
      <Post
        :post="PostStore.post"
        :author="AuthorsStore.getPostAuthor"
        :src="postImg" />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { usePostStore } from "../../stores/PostStore";
import { useAuthorStore } from "../../stores/AuthorStore";
import Loader from "../../components/Loader/Loader.vue";
import Post from "../../components/Post/Post.vue";

export default {
  components: { Post, Loader },
  setup() {
    const route = useRoute();
    const PostStore = usePostStore();
    const AuthorsStore = useAuthorStore();

    PostStore.getPost(route.params.id);
    AuthorsStore.getAuthors(route.query.userId);

    const post = PostStore.posts;
    const postImg = PostStore.getPostImageUrl(post.id);

    return { PostStore, post, AuthorsStore, postImg };
  },
};
</script>
