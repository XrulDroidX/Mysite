// Archives Netlify Forms submissions into Netlify Blobs (namespace: submissions)
const { getStore } = require('@netlify/blobs')

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body || '{}')
    const store = getStore('submissions')
    const ts = new Date().toISOString()
    const formName = payload?.payload?.form_name || 'unknown-form'
    const id = payload?.payload?.id || Math.random().toString(36).slice(2)
    const key = `${formName}/${ts}-${id}.json`

    await store.setJSON(key, payload.payload || payload)

    return { statusCode: 200, body: JSON.stringify({ ok: true, key }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: e.message }) }
  }
}
