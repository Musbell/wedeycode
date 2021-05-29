import { useRoute, computed } from "@nuxtjs/composition-api";
import { useQuery, useResult } from '@vue/apollo-composable/dist'
import { POST } from "~/gql/post.queries";

export const useBlog = () => {
  const route = useRoute()
  const id = computed(() => route.value.params.id)
  const { result, loading, error} = useQuery(POST, {
    id,
  })
  const post = useResult(result, null, data => data.getObject)
  return { post, loading, error }
}
