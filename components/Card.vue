<template>
  <NuxtLink :to="post.id">
    <div class="rounded overflow-hidden bg-white hover:shadow-lg">
      <img class="w-full" :src="post.banner" alt="Mountain">
      <div class="px-6 py-4">
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" :src="post.photo" alt="Avatar of Writer">
          <div class="mb-2">
            <p class="font-bold text-gray-900 leading-none">{{ post.title }}</p>
            <p class="text-gray-600">by {{ post.author }}</p>
          </div>
        </div>
        <p class="text-gray-700 text-base">
          {{ post.summary }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span v-for="category in post.categories" :key="category.id" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{{category.title}}
        </span>
      </div>
    </div>
  </NuxtLink>

</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: 'Card',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
})

</script>
