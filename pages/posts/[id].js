import Layout from '../../components/layout'
import {getPostsMetadata, getPost} from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getPostsMetadata().map(meta => {
    return {
      params: {
        id: meta.id
      }
    }
  })
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export function getStaticProps({params}) {
  const post = getPost(params.id)
  const x = {
    props: {
      post
    }
  }
  return x
}

export default function Post({post}) {
  return (
    <Layout>
      {post.id}
      <br />
      {post.title}
      <br />
      {post.date}
      <br />
      <div dangerouslySetInnerHTML={{__html: post.contents}} />
    </Layout>
  )
}
