<template>
  <div class="p-10">
    <div v-if="loading" class="text-3xl text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-gray-500">Error: {{ error.message }}</div>
    <div v-else-if="post">
      <div class="px-6 py-4">
        <div class="flex items-center">
          <img class="h-20 w-auto rounded-full mr-4" :src="post.metadata.author.metadata.author.imgix_url" alt="photo">
          <div class="mb-2">
            <p class="font-bold text-gray-900 leading-none">{{ post.title }}</p>
            <p class="text-gray-600">by {{ post.metadata.author.title }}</p>
          </div>
      </div>
      </div>
      <h1 class="title">{{ post.title }}</h1>
      <hr/>
      <div v-html="post.content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { useBlog } from "~/compositions/blog";

export default defineComponent({
  name: "index",
  setup() {
    const { post, loading, error } = useBlog()
    return { post, loading, error }
  }
})
</script>
