'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  formId: string
  defaultHeight?: number
}

export default function TallyEmbed({ formId, defaultHeight = 400 }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(defaultHeight)

  useEffect(() => {
    function handler(e: MessageEvent) {
      try {
        const msg = typeof e.data === 'string' ? JSON.parse(e.data) : e.data
        if (msg?.event === 'Tally::FormHeightChanged' && msg?.payload?.height) {
          setHeight(msg.payload.height)
        }
      } catch {
        // ignore non-JSON messages
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1`}
      width="100%"
      height={height}
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="Form"
      style={{ border: 'none', display: 'block', width: '100%', maxWidth: '100%' }}
    />
  )
}
