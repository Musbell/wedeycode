import gql from 'graphql-tag'
export const GET_POSTS = gql`
  query getPosts {
  getObjects(
    bucket_slug: "c9cae6e0-bee8-11eb-bae9-672714bf00a9"
    read_key: "Wk6ijX44Oz5M8pbEQeKyL3owtzLpVrTkuCMKyHkfFYP3MQhKcR"
    input: { limit: 20, query: { type: "posts" } }
  ) {
    objects {
      id
      title
      content
      metadata
    }
  }
}
`

export const POST = gql`
  query getPost($id: ID!) {
  getObject(
    bucket_slug: "c9cae6e0-bee8-11eb-bae9-672714bf00a9"
    read_key: "Wk6ijX44Oz5M8pbEQeKyL3owtzLpVrTkuCMKyHkfFYP3MQhKcR"
    object_id: $id
  ) {
    title
    content
    metadata
  }
}
`
