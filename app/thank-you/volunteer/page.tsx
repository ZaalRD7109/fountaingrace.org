import type { Metadata } from 'next'
import Link from 'next/link'
import ThankYouTracker from '@/components/ThankYouTracker'

export const metadata: Metadata = {
  title: 'Application Received | Fountain of Grace International',
  description: 'Thank you for applying to volunteer. Someone from FGI will be in touch within 3 days.',
  robots: 'noindex, nofollow',
}

export default function VolunteerThankYouPage() {
  return (
    <>
      <ThankYouTracker formName="volunteer" />
      <section className="bg-[#008080] text-white pt-16 pb-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
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
                text: 'Right now, if you have five minutes: a few questions on your phone that help us work out where you would actually enjoy serving. There is no pass mark and nothing in it decides whether you can serve.',
              },
              {
                step: '02',
                text: 'Within 3 days someone from FGI gets in touch to talk it through with you.',
              },
              {
                step: '03',
                text: 'You start alongside someone experienced for your first few Sundays, so you are never dropped in on your own.',
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

          <div className="bg-[#008080] rounded-2xl p-6 sm:p-8 mb-10 text-center">
            <h3 className="text-white text-xl font-bold mb-3">
              Want to help us place you well?
            </h3>
            <p className="text-white text-sm leading-relaxed mb-6">
              Five minutes, all tapping and no typing. It is not a test and there is no
              right answer. It just means the first conversation starts somewhere real
              instead of us guessing where to put you.
            </p>
            <a
              href="/serve/"
              className="inline-block bg-white text-[#008080] font-bold px-8 py-4 rounded-[30px] hover:bg-gray-50 transition-colors text-base"
            >
              Answer a few questions
            </a>
            <p className="text-white/80 text-xs mt-4">
              Or skip it. Someone will still be in touch within 3 days.
            </p>
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
