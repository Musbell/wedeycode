import { useRoute, computed } from "@nuxtjs/composition-api";
import { useQuery, useResult } from '@vue/apollo-composable/dist'
import { GET_POSTS, POST } from "~/gql/post.queries";

export const useCard = () => {
  interface Post {
    id: string
    title: string
    [propName: string]: any;
  }
  const { result, loading, error} = useQuery(GET_POSTS)
  const posts = useResult(result, null, data => data.getObjects.objects.map((post: Post) => ({
    id: post.id,
    title: post.title,
    author: post.metadata.author.title,
    summary: post.metadata.summary,
    categories: post.metadata.categories,
    banner: post.metadata.photo.imgix_url,
    photo: post.metadata.author.metadata.author.imgix_url
  })))

  return { posts, loading, error  }
}

export const useBlog = () => {
  const route = useRoute()
  const id = computed(() => route.value.params.id)
  const { result, loading, error} = useQuery(POST, {
    id,
  })
  const post = useResult(result, null, data => data.getObject)
  return { post, loading, error }
}
