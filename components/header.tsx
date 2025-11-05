'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

const links = [
  ['/', 'Beranda'],
  ['/about', 'Tentang'],
  ['/programs', 'Program'],
  ['/gallery', 'Galeri'],
  ['/reports', 'Laporan'],
  ['/news', 'Berita'],
  ['/resources', 'Pengurus'],
  ['/testimonials', 'Testimoni'],
  ['/partners', 'Mitra'],
  ['/volunteer', 'Relawan'],
  ['/contact', 'Kontak']
]

export function Header(){
  const [open,setOpen]=useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-extrabold">JEJAKA</Link>
        <div className="hidden md:flex items-center gap-4">
          {links.map(([href,label])=>(<Link key={href} href={href} className="hover:underline">{label}</Link>))}
          <ThemeToggle />
        </div>
        <button className="md:hidden p-2" aria-label="Menu" onClick={()=>setOpen(!open)}><Menu/></button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 grid gap-2">
          {links.map(([href,label])=>(<Link key={href} href={href} className="block py-2 border-b dark:border-slate-800">{label}</Link>))}
          <ThemeToggle />
        </div>
      )}
    </header>
  )
}
