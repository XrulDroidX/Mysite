export const metadata = { title: 'Program & Agenda' }
const agendas = [
  { title:'Bersih Pantai', date:'2025-12-12', location:'Pantai Panjang', desc:'Aksi bersih pantai bersama komunitas lokal.' },
  { title:'Kelas Koding Pemula', date:'2025-12-20', location:'Balai Pemuda', desc:'Belajar dasar HTML, CSS, JS untuk remaja.' },
  { title:'Festival Baca', date:'2026-01-15', location:'Lapangan Gampong', desc:'Lapak buku gratis & diskusi publik.' },
]
export default function ProgramsPage() {
  return (
    <div className="px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold">Program & Agenda</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {agendas.map((a,i)=>(
          <article key={i} className="rounded-xl border p-5 dark:border-slate-700">
            <h3 className="font-bold text-xl">{a.title}</h3>
            <p className="text-sm mt-1">{new Date(a.date).toLocaleDateString('id-ID')}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{a.location}</p>
            <p className="mt-3">{a.desc}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
