export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  replyTo?: string
): Promise<boolean> {
  const apiKey = Deno.env.get('RESEND_API_KEY')!
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: 'Fountain of Grace International <info@fountaingrace.org>',
      to: [to],
      subject,
      html,
      reply_to: replyTo ?? 'info@fountaingrace.org',
    }),
  })
  if (!res.ok) {
    // Never fail silently: log the real Resend response so a broken send is visible
    // in the edge-function logs (this is exactly the failure that hid for weeks -
    // an unverified domain returned 403 while the caller ignored the result).
    let body = ''
    try {
      body = await res.text()
    } catch {
      body = '(could not read body)'
    }
    console.error(`RESEND SEND FAILED status=${res.status} to=${to} subject="${subject}" body=${body}`)
  }
  return res.ok
}
