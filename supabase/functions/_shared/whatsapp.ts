export function whatsappLink(phone: string, name: string): string {
  const msg = encodeURIComponent(
    `Hi ${name}, this is Pastor Ricardo from Fountain of Grace International. I saw your message on our website and wanted to reach out personally.`
  )
  const cleaned = phone.replace(/\D/g, '').replace(/^0/, '27')
  return `https://wa.me/${cleaned}?text=${msg}`
}
