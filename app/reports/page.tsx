export const metadata = { title: 'Laporan Publik' }
const files = [
  { year: 2025, name: 'Laporan-Kegiatan-2025.pdf', path: '/reports/Laporan-Kegiatan-2025.pdf' },
  { year: 2025, name: 'Laporan-Keuangan-2025.pdf', path: '/reports/Laporan-Keuangan-2025.pdf' }
]
export default function ReportsPage() {
  return (
    <div className="px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold">Laporan Publik</h1>
      <div className="mt-8 space-y-4">
        {files.map((f,i)=>(
          <a key={i} href={f.path} className="block rounded-xl border p-4 hover:bg-slate-50 dark:hover:bg-slate-900" download>
            <div className="font-semibold">{f.name}</div>
            <div className="text-sm text-slate-500">Tahun {f.year}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
