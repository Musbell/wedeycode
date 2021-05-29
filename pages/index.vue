<template>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <div v-if="loading" class="text-3xl text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-gray-500">Error: {{ error.message }}</div>
    <card
      v-else-if="posts"
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Card from '~/components/Card.vue'
import {useCard} from "~/compositions/card";
export default defineComponent({
  components: { Card },
  setup() {
    const { posts, loading, error } = useCard()
    return { posts, loading, error }
  }
})
</script>
