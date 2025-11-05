'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="px-4 py-8 md:py-16 max-w-6xl mx-auto">
      <section className="rounded-2xl bg-gradient-to-br from-pastel-mint to-pastel-lilac dark:from-slate-800 dark:to-slate-700 p-8 md:p-12 shadow">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Gerak Muda, Cipta Perubahan.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}
          className="mt-4 text-lg md:text-xl max-w-2xl">
          JEJAKA menghimpun energi anak muda untuk proyek sosial, edukasi, dan kreativitas yang membumi.
        </motion.p>
        <div className="mt-8 flex gap-4">
          <Link href="/programs" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-primary-600 text-white hover:bg-primary-700 transition">
            Lihat Program <ArrowRight size={18} />
          </Link>
          <Link href="/volunteer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-primary-600 hover:bg-primary-50 dark:hover:bg-slate-800 transition">
            Jadi Relawan <Sparkles size={18} />
          </Link>
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        {[
          { title:'Aksi Sosial', desc:'Bakti komunitas, literasi, lingkungan.'},
          { title:'Kreativitas', desc:'Kelas desain, musik, teknologi.'},
          { title:'Jaringan', desc:'Kemitraan lintas komunitas & UMKM.'},
        ].map((c,i)=>(
          <motion.div key={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.15*i}}
            className="rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
            <h3 className="font-bold text-xl">{c.title}</h3>
            <p className="text-sm mt-2">{c.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
