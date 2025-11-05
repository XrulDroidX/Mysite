import Link from 'next/link'
export default function NotFound(){
  return (
    <div className="px-4 py-20 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2">Halaman tidak ditemukan.</p>
      <Link href="/" className="inline-block mt-6 rounded-xl px-5 py-3 bg-primary-600 text-white">Kembali</Link>
    </div>
  )
}
