import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/posts'
import { SITE } from '@/lib/site'

export async function GET(){
  const posts = await getAllPosts()
  const staticPaths = ['', 'about','programs','gallery','reports','news','resources','testimonials','partners','volunteer','contact']
    .map(p => `<url><loc>${SITE.url}/${p}</loc></url>`).join('')
  const postPaths = posts.map(p => `<url><loc>${SITE.url}/news/${p.frontmatter.slug}</loc></url>`).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticPaths}${postPaths}</urlset>`
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml; charset=UTF-8' } })
}
