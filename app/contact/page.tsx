export const metadata = { title: 'Kontak Kami' }
export default function ContactPage() {
  return (
    <div className="px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold">Kontak Kami</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-4 border rounded-xl p-6">
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden"><label>Jangan diisi: <input name="bot-field" /></label></p>
          <label className="block"><span>Nama</span><input name="name" required className="mt-1 w-full rounded-lg border p-2 dark:bg-slate-900"/></label>
          <label className="block"><span>Email</span><input name="email" type="email" required className="mt-1 w-full rounded-lg border p-2 dark:bg-slate-900"/></label>
          <label className="block"><span>Pesan</span><textarea name="message" rows={4} required className="mt-1 w-full rounded-lg border p-2 dark:bg-slate-900"></textarea></label>
          <button className="rounded-xl px-5 py-3 bg-primary-600 text-white hover:bg-primary-700 transition">Kirim</button>
        </form>
        <div>
          <h2 className="text-xl font-semibold">Alamat</h2>
          <p>Labuhanhaji Timur, Aceh Selatan, Indonesia</p>
          <div className="mt-4 aspect-video rounded-xl overflow-hidden">
            <iframe
              title="Peta Labuhanhaji Timur"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              src="https://www.google.com/maps?q=Labuhanhaji%20Timur%2C%20Aceh%20Selatan&output=embed">
            </iframe>
          </div>
          <div className="mt-4 text-sm">
            Email: halo@jejaka.id • Tel: +62-813-0000-0000
          </div>
        </div>
      </div>
    </div>
  )
}
