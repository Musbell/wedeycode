import {
  provide,
  onGlobalSetup,
  defineNuxtPlugin,
} from '@nuxtjs/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable/dist'

/**
 * This plugin will connect @nuxt/apollojs with @vue/apollo-composable
 */
export default defineNuxtPlugin((ctx) => {
  onGlobalSetup(() => {
    provide(DefaultApolloClient, ctx.app.apolloProvider?.defaultClient)
  })
})
