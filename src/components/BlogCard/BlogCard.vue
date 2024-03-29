<template>
  <div :class="$style.postCard">
    <router-link
      :to="`/post/${post.id}?userId=${post.userId}`"
      :class="$style.routerLink">
      <img
        :class="$style.postImg"
        :src="getPostImageUrl(post.id)"
        @error="handleImageError"
        alt="Dummy Image" />
      <div :class="$style.postContent">
        <h5 :class="$style.postTitle">
          {{ post.title }}
        </h5>

        <div :class="$style.cardBody">
          <div class="flex items-center">
            <p class="text-gray-400">
              <i :class="['material-icons', $style.iconStyle]"> person </i>
            </p>
            <p :class="$style.cardUserName">{{ post.username }}</p>
          </div>

          <div class="flex items-center">
            <p class="text-gray-400">
              <i :class="['material-icons', $style.iconStyle]"> phone </i>
            </p>
            <p :class="$style.postPhone">{{ post.phone }}</p>
          </div>
        </div>

        <p :class="$style.postBodyText">
          {{ post.body }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import noImageIcon from "@/assets/no-image-icon.png"; // Import the default image
import styles from "./PostCard.module.css"; // Import the CSS module

export default {
  setup() {
    const getPostImageUrl = (postId) =>
      `https://picsum.photos/600/300/?image=${postId}`;

    const handleImageError = (event) => {
      // Replace the image source with the default image URL
      event.target.src = noImageIcon;
    };

    return { getPostImageUrl, handleImageError };
  },
  props: ["post"],
  computed: {
    $style() {
      return styles; // Expose the styles object to the template
    },
  },
};
</script>
