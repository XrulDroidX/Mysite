import './globals.css'
import { SITE } from '@/lib/site'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: '%s — JEJAKA'
  },
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: 'JEJAKA',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    types: { 'application/rss+xml': '/rss.xml' }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
        <script dangerouslySetInnerHTML={{__html:`
          try{
            const t=localStorage.getItem('theme');
            if(t==='dark'){document.documentElement.classList.add('dark')}
          }catch(e){}
        `}} />
      </head>
      <body className="bg-white text-gray-800 dark:bg-slate-950 dark:text-slate-100">
        <a className="skip-link" href="#main">Lewati ke konten</a>
        <Header />
        <main id="main" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
