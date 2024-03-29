import { defineStore } from "pinia";

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
    currentPage: 1,
    itemsPerPage: 10, // Change this value as needed
    totalPages: null,
  }),

  actions: {
    async getPosts(pageNumber = 1) {
      this.posts = [];
      this.loading = true;
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${this.itemsPerPage}`);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        this.posts = data;
        this.currentPage = pageNumber;
        this.totalPages = Math.ceil(response.headers.get('X-Total-Count') / this.itemsPerPage);
        // Fetch user data for each post using the user ID
        await Promise.all(this.posts.map(async (post) => {
          const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
          if (!userResponse.ok) {
            throw new Error(`Failed to fetch user data for post with ID ${post.id}`);
          }
          const userData = await userResponse.json();
          post.username = userData.username; // Assign user data to post.user property
          post.phone = userData.phone
         
        }));
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
    ,

    async getPost(id) {
      this.post = null;
      this.loading = true;
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        this.post = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async getPostImageUrl(postId) {
      return `https://picsum.photos/600/300/?image=${postId}`;
    }
  }
});
