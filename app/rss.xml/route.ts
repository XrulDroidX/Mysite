import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/posts'
import { SITE } from '@/lib/site'

export async function GET(){
  const posts = await getAllPosts()
  const items = posts.map(p => `
    <item>
      <title><![CDATA[${p.frontmatter.title}]]></title>
      <link>${SITE.url}/news/${p.frontmatter.slug}</link>
      <pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.frontmatter.summary}]]></description>
    </item>`).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"><channel>
    <title>${SITE.title}</title>
    <link>${SITE.url}</link>
    <description>${SITE.description}</description>
    ${items}
  </channel></rss>`
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=UTF-8' } })
}
