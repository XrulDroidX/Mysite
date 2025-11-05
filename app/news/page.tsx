import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = { title: 'Berita & Artikel' }

export default async function NewsPage() {
  const posts = await getAllPosts()
  return (
    <div className="px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold">Berita & Artikel</h1>
      <div className="mt-8 space-y-6">
        {posts.map((p)=> (
          <article key={p.frontmatter.slug} className="rounded-xl border p-5 dark:border-slate-700">
            <h3 className="font-bold text-xl">
              <Link href={`/news/${p.frontmatter.slug}`}>{p.frontmatter.title}</Link>
            </h3>
            <p className="text-sm text-slate-500 mt-1">{new Date(p.frontmatter.date).toLocaleDateString('id-ID')} • {p.frontmatter.author}</p>
            <p className="mt-3">{p.frontmatter.summary}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
