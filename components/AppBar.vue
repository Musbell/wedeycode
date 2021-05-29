<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        </div>
        <NuxtLink to="/">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-12 w-auto rounded-2xl" src="https://yt3.ggpht.com/ytc/AAUvwngaC-AwesyrbD_7RuQUWhvzmsFrH7DMmsMt7YDH=s88-c-k-c0x00ffffff-no-rj" alt="Workflow">
            <img class="hidden lg:block h-12 w-auto rounded-2xl" src="https://yt3.ggpht.com/ytc/AAUvwngaC-AwesyrbD_7RuQUWhvzmsFrH7DMmsMt7YDH=s88-c-k-c0x00ffffff-no-rj" alt="Workflow">
          </div>
        </div>
        </NuxtLink>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="ml-3 relative">
            <img class="h-12 w-12 rounded-full" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1601688406203/g9qq-y20Q.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: 'AppBar'
})

</script>
