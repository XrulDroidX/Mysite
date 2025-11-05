'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Camera } from 'lucide-react'

const items = [
  { src: '/assets/gallery-1.jpg', alt:'Kegiatan 1' },
  { src: '', alt:'Kegiatan 2' },
  { src: '/assets/gallery-3.jpg', alt:'Kegiatan 3' },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string| null>(null)
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold">Galeri</h1>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((g,i)=>{
          const has = !!g.src
          return (
            <button key={i} onClick={()=> has && setLightbox(g.src)} className="relative aspect-square rounded-xl overflow-hidden border dark:border-slate-700">
              {has ? (
                <Image src={g.src} alt={g.alt} fill className="object-cover"/>
              ):(
                <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                  <Camera aria-hidden className="w-10 h-10 opacity-60"/>
                  <span className="sr-only">Placeholder gambar</span>
                </div>
              )}
            </button>
          )
        })}
      </div>
      {lightbox && (
        <div role="dialog" aria-label="Lightbox" className="fixed inset-0 bg-black/70 flex items-center justify-center p-4" onClick={()=>setLightbox(null)}>
          <div className="relative w-full max-w-3xl aspect-video">
            <Image src={lightbox} alt="Preview" fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  )
}
