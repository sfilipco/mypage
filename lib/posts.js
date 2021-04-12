import fs from 'fs'
import path from 'path'
import marked from 'marked'

const postsDirectory = path.join(process.cwd(), 'posts')
const postIndexFile = path.join(postsDirectory, 'posts.json')

export function getPost(id) {
  const post = getPostsMetadata().find(post => post.id === id)
  const fullPath = path.join(postsDirectory, post.fileName);
  const markdown = fs.readFileSync(fullPath, 'utf8');
  const contents = marked(markdown)
  const x = {
    ...post,
    contents
  }
  console.log(x)
  return x
}

export function getPostsMetadata() {
  let postIndex = JSON.parse(fs.readFileSync(postIndexFile))
  return postIndex.posts
}

