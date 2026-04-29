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
  return res.ok
}
