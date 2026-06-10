import type { Metadata } from 'next'
import Link from 'next/link'
import ThankYouTracker from '@/components/ThankYouTracker'

export const metadata: Metadata = {
  title: 'We Are Ready For You | Fountain of Grace International',
  description: 'Thank you for planning your visit. Everything you need to know is ready for you.',
  robots: 'noindex, nofollow',
}

export default function VisitThankYouPage() {
  return (
    <>
      <ThankYouTracker formName="plan_your_visit" />

      <section className="bg-[#008080] text-white pt-16 pb-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#FFD600] font-semibold text-xs uppercase tracking-wider mb-3">
            You are on our list
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            We are ready for you on Sunday.
          </h1>
          <p className="text-white text-base leading-relaxed mb-8">
            Everything you need for your visit is ready for you on our website, and our
            church WhatsApp is open if anything is on your mind before then. On the day,
            someone will be at the door watching for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/what-to-expect" className="btn-primary">
              What to Expect
            </Link>
            <a
              href="https://wa.me/27752592555?text=Hi%2C%20I%20just%20filled%20in%20the%20plan%20your%20visit%20form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25d366] text-[#1a1a1a] font-bold px-8 py-4 rounded-[30px] hover:bg-[#1ebe5d] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">What happens next</h2>
          <div className="space-y-4">
            {[
              {
                step: '01',
                text: 'We receive your form immediately and add you to our list for Sunday.',
              },
              {
                step: '02',
                text: 'Everything you need for your first visit - where to park, what to wear, what to expect - is already answered on our website, so you are never left guessing.',
              },
              {
                step: '03',
                text: 'On Sunday, arrive at 08:45. Someone will be at the door watching for new faces. You will not be left to figure it out alone.',
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

          <div className="mt-10 bg-[#008080]/5 border border-[#008080]/20 rounded-xl p-6 text-center">
            <p className="text-sm text-[#595959] mb-1">
              Questions before Sunday?
            </p>
            <a
              href="https://wa.me/27752592555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008080] font-semibold hover:underline text-sm"
            >
              WhatsApp +27 75 259 2555
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
