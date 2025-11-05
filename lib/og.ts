import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'JEJAKA'
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg,#b9f3e4,#d8c7ff)',
          fontSize: 64,
          fontWeight: 700,
          padding: 40
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 16 }}>Jejaring Pemuda Kreatif dan Aktif</div>
        <div style={{ textAlign: 'center' }}>{title}</div>
      </div>
    ),
    {{ width: 1200, height: 630 }}
  )
}
