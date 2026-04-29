import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Message Received | Fountain of Grace International',
  description: 'Thank you for your message. We will respond within 24 hours.',
  robots: 'noindex, nofollow',
}

export default function ContactThankYouPage() {
  return (
    <>
      <section className="bg-[#008080] text-white pt-16 pb-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#FFD600] font-semibold text-xs uppercase tracking-wider mb-3">
            Message received
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            We got your message.
          </h1>
          <p className="text-white text-base leading-relaxed mb-8">
            Someone from Fountain of Grace International will get back to you within 24 hours.
            If your matter is urgent, WhatsApp us directly.
          </p>
          <a
            href="https://wa.me/27752592555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25d366] text-[#1a1a1a] font-bold px-8 py-4 rounded-[30px] hover:bg-[#1ebe5d] transition-colors"
          >
            WhatsApp +27 75 259 2555
          </a>
        </div>
      </section>

      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#595959] text-sm mb-6">
            While you wait, you might find these helpful:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/faq"
              className="inline-block border border-[#008080] text-[#008080] font-semibold px-6 py-3 rounded-[30px] hover:bg-[#008080] hover:text-white transition-colors text-sm"
            >
              Read our FAQ
            </Link>
            <Link
              href="/plan-your-visit"
              className="btn-primary text-sm"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
