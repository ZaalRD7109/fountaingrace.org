import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Application Received | Fountain of Grace International',
  description: 'Thank you for applying to volunteer. Someone from FGI will be in touch within 3 days.',
  robots: 'noindex, nofollow',
}

export default function VolunteerThankYouPage() {
  return (
    <>
      <section className="bg-[#008080] text-white pt-16 pb-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#FFD600] font-semibold text-xs uppercase tracking-wider mb-3">
            Application received
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Thank you for putting your hand up.
          </h1>
          <p className="text-white text-base leading-relaxed">
            Someone from our team will be in touch within 3 days to talk about where you can
            best serve.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">What happens next</h2>
          <div className="space-y-4 mb-10">
            {[
              {
                step: '01',
                text: 'We review your application and note your skills and availability.',
              },
              {
                step: '02',
                text: 'Someone from FGI will contact you within 3 days to discuss available opportunities.',
              },
              {
                step: '03',
                text: 'We match you with a role that fits your gifts and schedule.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 items-start bg-gray-50 rounded-xl border border-gray-100 p-5"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#008080] text-white flex items-center justify-center text-xs font-bold">
                  {item.step}
                </div>
                <p className="text-sm text-[#595959] leading-relaxed pt-1">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/community-impact" className="btn-primary text-sm text-center">
              See Community Impact Work
            </Link>
            <a
              href="https://wa.me/27752592555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25d366] text-[#1a1a1a] font-bold px-6 py-3 rounded-[30px] hover:bg-[#1ebe5d] transition-colors text-sm text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
