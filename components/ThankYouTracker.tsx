'use client'

import { useEffect } from 'react'
import { trackFormSubmitSuccess, type FormName } from '@/lib/tracking'

type Props = {
  formName: FormName
  params?: Record<string, unknown>
}

export default function ThankYouTracker({ formName, params }: Props) {
  useEffect(() => {
    trackFormSubmitSuccess(formName, params)
  }, [formName, params])

  return null
}
