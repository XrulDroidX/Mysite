export const metadata = { title: 'Tentang JEJAKA' }
export default function AboutPage() {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl md:text-5xl font-bold">Tentang JEJAKA</h1>
      <p>
        Kami lahir dari kegelisahan yang produktif: bahwa perubahan hanya mungkin jika generasi muda
        mengambil peran—bukan sekadar bersuara, tetapi berkarya. JEJAKA adalah jejaring yang menghimpun
        anak muda lintas disiplin untuk merajut solidaritas, menggerakkan aksi sosial, dan merawat imajinasi.
      </p>
      <h2 className="text-2xl font-semibold mt-8">Visi</h2>
      <p>Ekosistem kepemudaan yang kreatif, berempati, dan berdaya, bertumpu pada kolaborasi dan pengetahuan.</p>
      <h2 className="text-2xl font-semibold mt-8">Misi</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Menyelenggarakan program sosial yang berdampak dan terukur.</li>
        <li>Mendorong karya kreatif dan literasi teknologi di tingkat akar rumput.</li>
        <li>Membangun jejaring kemitraan yang adil dan berkelanjutan.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8">Sejarah Singkat</h2>
      <p>
        Berawal dari kelas-kelas kecil dan kerja bakti kampung, kami tumbuh menjadi organisasi terbuka
        yang mengutamakan integritas, inklusi, dan keberanian mencoba hal baru.
      </p>
    </div>
  )
}
