import Link from 'next/link'
export function Footer(){
  return (
    <footer className="mt-16 border-t dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
        <div>© {new Date().getFullYear()} JEJAKA. Hak cipta dilindungi.</div>
        <nav className="flex gap-4">
          <Link href="/privacy">Privasi</Link>
          <Link href="/terms">Syarat</Link>
          <Link href="/disclaimer">Penafian</Link>
          <Link href="/status">Status</Link>
        </nav>
      </div>
    </footer>
  )
}
