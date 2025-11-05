import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'content', 'posts')

export type PostFrontmatter = {
  title: string
  slug: string
  date: string
  author: string
  cover?: string
  summary: string
  tags?: string[]
  status?: 'draft' | 'published'
}

export async function getAllPosts() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  const posts = await Promise.all(files.map(async (file) => {
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
    const { data, content } = matter(raw)
    const processed = await remark().use(html).process(content)
    const body = processed.toString()
    return { frontmatter: data as PostFrontmatter, body }
  }))
  return posts
    .filter(p => p.frontmatter.status !== 'draft')
    .sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date))
}

export async function getPostBySlug(slug: string) {
  const file = path.join(postsDir, `${slug}.md`)
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html).process(content)
  return { frontmatter: data as PostFrontmatter, body: processed.toString() }
}
