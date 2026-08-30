import type { Metadata } from 'next'
import Link from 'next/link'
import VolunteerForm from '@/components/VolunteerForm'

export const metadata: Metadata = {
  title: 'Community Impact | FGI NPO 316-193 | Pretoria North',
  description:
    'Fountain of Grace International (NPO 316-193), a church in Pretoria North that helps where it can - food, electricity and rent support, pastoral care and prayer, and skills training. See how every rand is used. Give, volunteer, or plan a visit.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/community-impact',
  },
  openGraph: {
    title: 'Community Impact | FGI NPO 316-193 | Pretoria North',
    description:
      'A church in Pretoria North that helps where it can - food, electricity and rent support, pastoral care and prayer, and skills training. See how every rand is used.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/community-impact',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['NGO', 'Organization'],
  name: 'Fountain of Grace International',
  legalName: 'Fountain of Grace International NPO',
  foundingLocation: 'Pretoria North, South Africa',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '323 B Danie Theron Street',
    addressLocality: 'Pretoria North',
    addressRegion: 'Gauteng',
    postalCode: '0182',
    addressCountry: 'ZA',
  },
  telephone: '+27752592555',
  url: 'https://www.fountaingrace.org',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'NPO Registration',
    recognizedBy: {
      '@type': 'Organization',
      name: 'South African Department of Social Development',
    },
    identifier: '316-193',
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Community Impact', item: 'https://www.fountaingrace.org/community-impact' },
  ],
}

export default function CommunityImpactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Community Impact · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Faith that shows up.
          </h1>
          <p className="text-white text-base leading-relaxed mb-5">
            Fountain of Grace International is a church in Pretoria North that does not wait for a person
            to have it all together before we care. We are a registered NPO, number 316-193. We are small
            on paper. Small has never stopped us from showing up for the person in front of us, and it never will.
          </p>
          <div className="inline-block bg-white text-[#006b6b] rounded-lg px-6 py-4 shadow-sm text-left">
            <p className="font-extrabold">NPO Registration Number: 316-193</p>
            <p className="text-sm font-medium text-[#595959] mt-1">
              Registered under the Nonprofit Organisations Act, 71 of 1997
            </p>
          </div>
        </div>
      </section>

      {/* WHAT LOVE HAS LOOKED LIKE */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What love has looked like</h2>
          <div className="space-y-4 text-[#595959] leading-relaxed text-lg">
            <p>
              We do not run a benefits office, and there is no form to fill in. But when a family near us has
              had nothing to eat, we have put food on their table. When a home was about to go dark, we have
              kept the lights on. When someone was days from losing the roof over their head, we have stood in
              the gap. Not as a programme, and never to sign anyone up. We do it because that is what a church is for.
            </p>
          </div>
        </div>
      </section>

      {/* WE DO NOT SEND AN INVOICE FOR LOVE */}
      <section className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">We do not send an invoice for love</h2>
          <div className="space-y-4 text-[#595959] leading-relaxed text-lg">
            <p>
              Some of the people we walk with would never set foot in a professional&apos;s office. They come to
              us instead, and we do not turn anyone away. When someone needs prayer, the pastor drives to them on
              his own petrol. When a family moves into a new home, we come and dedicate it, and we hand them no bill.
              When a call runs late into the night, it runs late, and nobody is charged for being cared for. It costs
              us something every time, and it costs the person nothing. For the people we reach, that goes further
              than anything with a price on it.
            </p>
          </div>
        </div>
      </section>

      {/* TOOLS IN PEOPLE'S HANDS */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Tools in people&apos;s hands</h2>
          <div className="space-y-4 text-[#595959] leading-relaxed text-lg">
            <p>
              We also give people something to build with. Practical training in leadership and church management
              for those who serve, and real digital and business skills for people who want to stand on their own
              feet and provide for their families. We give it away. A person who can carry themselves is a person set free.
            </p>
          </div>
        </div>
      </section>

      {/* WHERE WE ARE GOING */}
      <section className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Where we are going</h2>
          <div className="space-y-4 text-[#595959] leading-relaxed text-lg">
            <p>
              Everything we have done so far is the start, not the finish. Our founding document sets out a bigger
              work: standing with people through their hardest seasons, education and skills development, and building
              families and community that hold. We are building toward it steadily, as the resources and the right
              people arrive.
            </p>
            <p>
              If you have a skill and a heart to give it to something real, there is a place for you here.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WE ASK */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why we ask</h2>
          <div className="space-y-4 text-[#595959] leading-relaxed text-lg">
            <p>
              We have never charged for any of this, and we never will. The petrol, the airtime, the food, the hours
              on the phone, we have carried the cost ourselves, gladly. A gift to Fountain of Grace does not pay us to
              do the work. It lets us do more of it, for more people. The love was never for sale, so every rand goes
              straight into reaching one more person.
            </p>
          </div>
        </div>
      </section>

      {/* HOW YOUR SUPPORT REACHES PEOPLE - real funds data from our accounting */}
      <section className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How your support reaches people</h2>
          <p className="text-[#595959] mb-8 leading-relaxed">
            We keep proper books, and we show them. This is how what comes in is actually used - straight from our
            own records, not a round number we picked to look good.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-6 font-semibold text-gray-700">Where it goes</th>
                  <th className="text-left py-3 font-semibold text-gray-700">Share</th>
                </tr>
              </thead>
              <tbody className="text-[#595959]">
                {[
                  { cat: 'Food and basic aid', pct: '58%' },
                  { cat: 'Materials and getting help to people', pct: '14%' },
                  { cat: 'Running costs (admin, compliance)', pct: '28%' },
                ].map((row) => (
                  <tr key={row.cat} className="border-b border-gray-100">
                    <td className="py-3 pr-6">{row.cat}</td>
                    <td className="py-3 font-semibold text-[#006b6b]">{row.pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">Our promise on your gift</h3>
            <div className="space-y-3 text-sm text-[#595959] leading-relaxed">
              <p>
                Fountain of Grace International is registered under the Nonprofit Organisations Act, 71 of 1997 (NPO
                No: 316-193). Every gift is used for the work of the church and the people we reach, and for the
                running costs that keep that work going.
              </p>
              <p>
                No gift is ever used for the personal benefit of the pastoral team or anyone connected to the church.
                Our financial records are kept properly and are available to donors and the Department of Social
                Development on request.
              </p>
              <p>
                We will never ask for a gift under false or exaggerated claims. If you ever want to know how yours was
                used, contact us and we will tell you plainly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE WAYS TO HELP */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Three ways to be part of it</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-sm transition-shadow">
              <div className="text-4xl mb-3" aria-hidden="true">💳</div>
              <h3 className="font-bold text-gray-900 mb-2">Give</h3>
              <p className="text-sm text-[#595959] leading-relaxed mb-5">
                A gift lets us do more of what we already do for free - reach one more family, one more person.
              </p>
              <Link href="/donate" className="btn-teal text-sm w-full block">
                Give
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-sm transition-shadow">
              <div className="text-4xl mb-3" aria-hidden="true">🙌</div>
              <h3 className="font-bold text-gray-900 mb-2">Serve with us</h3>
              <p className="text-sm text-[#595959] leading-relaxed mb-5">
                Bring the skill you have. There is a place here for people who want to give it to something real.
              </p>
              <Link href="/volunteer" className="btn-teal text-sm w-full block">
                Volunteer With Us
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-sm transition-shadow">
              <div className="text-4xl mb-3" aria-hidden="true">🤝</div>
              <h3 className="font-bold text-gray-900 mb-2">Partner with us</h3>
              <p className="text-sm text-[#595959] leading-relaxed mb-5">
                If your organisation wants to build something good in Pretoria North with us, we welcome the conversation.
              </p>
              <Link href="/contact" className="btn-teal text-sm w-full block">
                Contact Us to Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section id="volunteer-form" className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="section-container max-w-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Volunteer Application</h2>
          <p className="text-[#595959] mb-6 leading-relaxed">
            No experience needed. Fill in your details and we will reach out with next steps.
          </p>
          <VolunteerForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions about our NPO work</h2>
          <dl className="space-y-0">
            <div className="faq-block">
              <dt className="font-semibold text-gray-900 mb-2">
                Is Fountain of Grace International a registered NPO in South Africa?
              </dt>
              <dd className="text-[#595959] leading-relaxed">
                Yes. Fountain of Grace International is registered under the Nonprofit Organisations Act, 71 of 1997,
                with NPO Number 316-193. We are a church in Pretoria North that helps where we can - practical help
                like food and electricity, pastoral care and prayer, and skills training.
              </dd>
            </div>
            <div className="faq-block">
              <dt className="font-semibold text-gray-900 mb-2">
                How do I volunteer with an NPO in Pretoria North?
              </dt>
              <dd className="text-[#595959] leading-relaxed">
                To volunteer with Fountain of Grace International in Pretoria North, complete the{' '}
                <Link href="/volunteer" className="fgi-link">volunteer form here</Link>{' '}
                or send a WhatsApp to +27 75 259 2555. No prior experience is required.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* PLAN YOUR VISIT CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <p className="text-white text-sm font-semibold uppercase tracking-wider mb-3">
            You are also welcome on Sunday
          </p>
          <h2 className="text-2xl font-bold text-white mb-4">Come and see the church behind the work.</h2>
          <p className="text-white mb-6 max-w-lg mx-auto">
            Fountain of Grace International is a church in Pretoria North as well as a registered NPO.{' '}
            <Link href="/what-to-expect" className="text-white font-semibold hover:underline">Sunday services</Link>{' '}
            are open to everyone.
          </p>
          <Link href="/plan-your-visit" className="btn-primary">
            Plan Your Visit
          </Link>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-white py-10 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>
              Fountain of Grace International is a registered non-profit organisation (NPO No: 316-193) based in
              Pretoria North, Gauteng, operating under the Nonprofit Organisations Act 71 of 1997. We are a church
              that helps where we can with practical support such as food and electricity, pastoral care and prayer,
              and skills training, and we publish how every rand is used. FGI accepts gifts via PayPal and direct EFT,
              and welcomes volunteers and organisational partnerships. Contact us on{' '}
              <a href="tel:+27752592555" className="text-[#006b6b] font-semibold">+27 75 259 2555</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
