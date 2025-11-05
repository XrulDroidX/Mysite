'use client'
import { useEffect, useState } from 'react'

type Item = { key: string, size?: number, uploadedAt?: string }

export default function SubmissionsAdmin(){
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch('/api/submissions').then(r=>r.json()).then((res)=>{
      const arr = res?.objects || res?.items || []
      setItems(arr)
    }).finally(()=>setLoading(false))
  }, [])

  return (
    <div className="px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold">Arsip Submissions</h1>
      <p className="mt-2 text-sm text-slate-500">Data otomatis tersimpan ke Netlify Blobs.</p>
      {loading ? <p className="mt-6">Memuat...</p> : (
        <div className="mt-6 space-y-2">
          {items.length === 0 && <p>Tidak ada data.</p>}
          {items.map((it)=> (
            <div key={it.key} className="rounded-xl border p-3 dark:border-slate-700 flex items-center justify-between">
              <div className="text-sm break-all">{it.key}</div>
              <a className="text-primary-600 hover:underline" href={`/api/submissions?key=${encodeURIComponent(it.key)}`} download>
                Unduh JSON
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
