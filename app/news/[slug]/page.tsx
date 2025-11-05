import { getAllPosts, getPostBySlug } from '@/lib/posts'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(p => ({ slug: p.frontmatter.slug }))
}

export async function generateMetadata({ params }:{ params:{ slug:string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  return { title: post.frontmatter.title, description: post.frontmatter.summary }
}

export default async function PostPage({ params }:{ params:{ slug:string } }){
  const post = await getPostBySlug(params.slug)
  return (
    <article className="px-4 py-10 max-w-3xl mx-auto prose dark:prose-invert">
      <h1 className="!mb-2">{post.frontmatter.title}</h1>
      <p className="text-sm text-slate-500">{new Date(post.frontmatter.date).toLocaleDateString('id-ID')} • {post.frontmatter.author}</p>
      <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  )
}
