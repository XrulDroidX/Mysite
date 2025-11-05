'use client'
import Image from 'next/image'
export const metadata = { title: 'Sponsor & Mitra' }
const partners = [
  { name:'Mitra A', logo:'', href:'#' },
  { name:'Mitra B', logo:'/assets/partner-b.png', href:'#' },
  { name:'Mitra C', logo:'', href:'#' }
]
export default function PartnersPage(){
  return (
    <div className="px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold">Sponsor & Mitra</h1>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
        {partners.map((p,i)=>{
          const has = !!p.logo
          return (
            <a key={i} href={p.href} className="rounded-xl border p-6 hover:shadow-md transition dark:border-slate-700 flex items-center justify-center">
              {has ? (
                <div className="relative w-40 h-16">
                  <Image src={p.logo} alt={`Logo ${p.name}`} fill className="object-contain"/>
                </div>
              ) : (
                <div className="text-center text-sm opacity-70">Partnership Pending</div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
