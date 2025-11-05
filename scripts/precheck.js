const fs = require('node:fs')
const path = require('node:path')

const mustHave = [
  'content/posts',
  'public/admin/config.yml',
  'app/sitemap.xml/route.ts',
  'app/rss.xml/route.ts'
]

for (const p of mustHave) {
  if (!fs.existsSync(path.join(process.cwd(), p))) {
    console.error('[precheck] Missing:', p)
    process.exit(1)
  }
}
console.log('[precheck] OK')
