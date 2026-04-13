import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Fountain of Grace International — Church in Pretoria North, South Africa'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a2a4a 0%, #1a4a7a 60%, #2a9df4 100%)',
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background accent circle */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(42, 157, 244, 0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 215, 0, 0.08)',
          }}
        />

        {/* Logo image */}
        <img
          src="https://www.fountaingrace.org/logo-square.png"
          width={160}
          height={160}
          style={{ borderRadius: '16px', marginBottom: '28px', objectFit: 'contain' }}
          alt="FGI logo"
        />

        {/* Church name */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: '800',
            color: '#ffffff',
            textAlign: 'center',
            letterSpacing: '-1px',
            lineHeight: '1.1',
            marginBottom: '12px',
          }}
        >
          Fountain of Grace
        </div>
        <div
          style={{
            fontSize: '52px',
            fontWeight: '800',
            color: '#FFD600',
            textAlign: 'center',
            letterSpacing: '-1px',
            lineHeight: '1.1',
            marginBottom: '28px',
          }}
        >
          International
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.85)',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: '1.4',
            marginBottom: '32px',
          }}
        >
          Church &amp; Registered NPO · Pretoria North, South Africa
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50px',
            paddingLeft: '32px',
            paddingRight: '32px',
            paddingTop: '12px',
            paddingBottom: '12px',
          }}
        >
          <div style={{ color: '#2a9df4', fontSize: '18px', fontWeight: '700' }}>
            🗓 Sundays 09:00
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>|</div>
          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px' }}>
            323 B Danie Theron Street, Pretoria North
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>|</div>
          <div style={{ color: '#FFD600', fontSize: '18px', fontWeight: '600' }}>
            NPO 316-193
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
