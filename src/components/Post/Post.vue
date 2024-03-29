<template>
  <div :class="$style.parent">
    <div :class="$style.innerParent">
      <img
        :src="'https://picsum.photos/600/300/?image=' + post.id"
        :class="$style.postImg" />
      <div class="py-4">
        <div>
          <h6 :class="$style.postTitle">
            {{ post.title }}
          </h6>
          <div :class="$style.cardBody">
            <div :class="$style.authorParent">
              <p v-if="author" class="text-gray-400">
                <i :class="['material-icons', $style.icon]"> person </i>
              </p>
              <p :class="$style.dataText">
                {{ author.username }}
              </p>
            </div>

            <div class="flex items-center">
              <p v-if="author" class="text-gray-400">
                <i :class="['material-icons', $style.icon]"> phone </i>
              </p>
              <p :class="$style.dataText">{{ author.phone }}</p>
            </div>
          </div>
        </div>

        <p :class="$style.bodyText">
          {{ post.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import style from "./Post.module.css";
export default {
  props: ["post", "author", "src"],
  computed: {
    $style() {
      return style; // Expose the styles object to the template
    },
  },
};
</script>
