export const metadata = { title: 'Testimoni' }
const data = [
  { name:'Ayu', text:'JEJAKA bikin kampung kami hidup lagi. Anak-anak betah membaca.'},
  { name:'Rizal', text:'Kelas kreatifnya seru dan membumi, nggak menggurui.'},
  { name:'Mitra UMKM', text:'Kolaborasi yang adil dan transparan.'}
]
export default function TestimonialsPage() {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold">Testimoni</h1>
      <div className="mt-8 space-y-4">
        {data.map((t,i)=> (
          <blockquote key={i} className="rounded-xl border p-4 dark:border-slate-700">
            <p className="italic">“{t.text}”</p>
            <footer className="mt-2 text-sm text-slate-500">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  )
}
