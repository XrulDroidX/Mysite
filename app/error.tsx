'use client'
import Link from 'next/link'
export default function Error({error}:{error:Error}){
  return (
    <div className="px-4 py-20 text-center">
      <h1 className="text-5xl font-bold">Terjadi Kesalahan</h1>
      <p className="mt-2">{error.message}</p>
      <Link href="/" className="inline-block mt-6 rounded-xl px-5 py-3 bg-primary-600 text-white">Kembali</Link>
    </div>
  )
}
