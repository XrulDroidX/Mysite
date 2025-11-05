import Image from 'next/image'
import { users } from '@/data/users'
export const metadata = { title: 'Sumber Daya & Pengurus' }

export default function ResourcesPage() {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold">Sumber Daya & Pengurus</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {users.map(u=>{
          const src = u.photo && u.photo.trim() ? u.photo : '/assets/default-avatar.png'
          return (
            <article key={u.name} className="rounded-xl border p-4 dark:border-slate-700">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image src={src} alt={`Foto ${u.name}, ${u.role}`} fill className="object-cover"/>
              </div>
              <h3 className="font-bold text-lg mt-3">{u.name}</h3>
              <p className="text-sm text-slate-500">{u.role}</p>
              <p className="mt-2">{u.bio}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}
