import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Prayer Request Received | Fountain of Grace International',
  description: 'Your prayer request has been received. Pastor Ricardo reads and prays over every request.',
  robots: 'noindex, nofollow',
}

export default function PrayerThankYouPage() {
  return (
    <>
      <section className="bg-[#008080] text-white pt-16 pb-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#FFD600] font-semibold text-xs uppercase tracking-wider mb-3">
            Your request is in safe hands
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Pastor Ricardo will pray over this personally.
          </h1>
          <p className="text-white text-base leading-relaxed">
            Nothing is shared publicly. Your request has been received by the pastoral team only.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <blockquote className="border-l-4 border-[#008080] pl-5 py-2 mb-8">
            <p className="text-[#1a1a1a] text-base leading-relaxed italic">
              &ldquo;Be careful for nothing; but in every thing by prayer and supplication with
              thanksgiving let your requests be made known unto God. And the peace of God, which
              passeth all understanding, shall keep your hearts and minds through Christ Jesus.&rdquo;
            </p>
            <footer className="text-sm text-[#595959] mt-2 not-italic">
              Philippians 4:6-7 (KJV)
            </footer>
          </blockquote>

          <p className="text-[#595959] text-sm leading-relaxed mb-8">
            If you would like to speak with someone, you are welcome to reach out directly.
            Pastor Ricardo responds personally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/27752592555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25d366] text-[#1a1a1a] font-bold px-6 py-3 rounded-[30px] hover:bg-[#1ebe5d] transition-colors text-sm text-center"
            >
              WhatsApp the Pastor
            </a>
            <Link
              href="/"
              className="inline-block border border-gray-200 text-[#595959] font-semibold px-6 py-3 rounded-[30px] hover:border-[#008080] hover:text-[#008080] transition-colors text-sm text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
