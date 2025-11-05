import { NextResponse } from 'next/server'
import { getStore } from '@netlify/blobs'

export async function GET(req: Request){
  const { searchParams } = new URL(req.url)
  const key = searchParams.get('key')
  const store = getStore('submissions')

  if (key){
    const data = await store.get(key, { type: 'json' })
    return NextResponse.json(data ?? {})
  }

  const list = await store.list()
  return NextResponse.json(list)
}
