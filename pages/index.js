import Head from 'next/head'
import Layout from '../components/layout'
import {getPostsMetadata} from '../lib/posts'

export async function getStaticProps() {
  const postsMetadata = getPostsMetadata()
  return {
    props: {
      postsMetadata
    }
  }
}

export default function Home({postsMetadata}) {
  return (
    <Layout>
      <Head>
        <title>sfilip.com</title>
      </Head>
      <section>
        <p>
          Hi! I'm Stefan. I'm a software engineer and this is my blog.
        </p>
      </section>

      <section>
        <h2>Posts</h2>
        <ul>
          {postsMetadata.map((post) => (
            < li key={post.id} >
              {post.title}
              < br />
              {post.id}
              < br />
              {post.date}
            </li>
          ))}
        </ul>
      </section>
    </Layout >
  )
}
