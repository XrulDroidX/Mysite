'use client'
import { useState } from 'react'
import { z } from 'zod'

const Schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  interests: z.string().min(5)
})

export const metadata = { title: 'Relawan' }

export default function VolunteerPage() {
  const [err, setErr] = useState<string>('')
  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    const fd = new FormData(e.currentTarget)
    const obj = Object.fromEntries(fd.entries())
    const parsed = Schema.safeParse(obj)
    if(!parsed.success){
      e.preventDefault()
      setErr('Mohon lengkapi data dengan benar.')
    }
  }
  return (
    <div className="px-4 py-10 max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold">Daftar Relawan</h1>
      <p className="mt-3">Isi formulir berikut. Data aman dan hanya untuk keperluan koordinasi.</p>
      <form name="volunteer" method="POST" data-netlify="true" data-netlify-honeypot="hp" className="mt-6 space-y-4 border rounded-xl p-6" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="volunteer" />
        <p className="hidden">
          <label>Jangan diisi: <input name="hp" /></label>
        </p>
        <label className="block">
          <span>Nama</span>
          <input required name="name" className="mt-1 w-full rounded-lg border p-2 dark:bg-slate-900"/>
        </label>
        <label className="block">
          <span>Email</span>
          <input required name="email" type="email" className="mt-1 w-full rounded-lg border p-2 dark:bg-slate-900"/>
        </label>
        <label className="block">
          <span>Minat / Keahlian</span>
          <textarea required name="interests" className="mt-1 w-full rounded-lg border p-2 dark:bg-slate-900" rows={4}></textarea>
        </label>
        <div data-netlify-recaptcha="true"></div>
        {err && <p role="alert" className="text-red-600">{err}</p>}
        <button className="rounded-xl px-5 py-3 bg-primary-600 text-white hover:bg-primary-700 transition">Kirim</button>
      </form>
    </div>
  )
}
