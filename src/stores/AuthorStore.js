import { defineStore } from "pinia";
import { usePostStore } from "./PostStore";

export const useAuthorStore = defineStore('authorStore', {
  state: () => ({
    authors: [],
    loading: false,
    error: null,
  }),
  getters: {
    getPostAuthor: (state) => {
      return state.authors
    }
  },
  actions: {
    async getAuthors(id) {
      this.loading = true
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch authors")
        }
        const data = await response.json()
        this.authors = data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }  
  }
})

