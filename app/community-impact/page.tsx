import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Programs | NPO 316-193 | Fountain of Grace International Pretoria',
  description:
    'NPO 316-193 in Pretoria North. We run 6 community programs — food relief, emotional support, and family guidance. Donate, volunteer, or partner with us today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/community-impact',
  },
  openGraph: {
    title: 'Community Programs | NPO 316-193 | Fountain of Grace International Pretoria',
    description:
      'NPO 316-193 in Pretoria North. We run 6 community programs — food relief, emotional support, and family guidance. Donate, volunteer, or partner with us today.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/community-impact',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['NGO', 'Organization'],
  name: 'Fountain of Grace International',
  legalName: 'Fountain of Grace International NPO',
  nonprofitStatus: 'Nonprofit501c3',
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

const programs = [
  {
    badge: 'Mental health support / psychosocial services',
    title: 'Community Care and Emotional Support',
    who: 'Individuals in Pretoria North and surrounding communities facing emotional stress, trauma, or personal crisis.',
    problem:
      'Many people carry emotional burdens without any structured support. Without access to counseling or pastoral care, this often leads to long-term instability, family breakdown, and withdrawal from community.',
    provides:
      'One-on-one pastoral counseling, structured prayer support, crisis response care, and ongoing emotional check-ins through a trained care team.',
    outcome:
      'Individuals experience greater emotional stability, improved decision-making, and restored connection to community.',
  },
  {
    badge: 'Education / youth and adult development',
    title: 'Education and Personal Development',
    who: 'Youth and adults in Pretoria North and surrounding areas who lack structured learning environments or life direction.',
    problem:
      'Without access to mentorship and practical teaching, many individuals remain stuck in patterns that limit their personal and professional growth.',
    provides:
      'Weekly teaching sessions, structured discipleship programs, leadership development, and life skills training.',
    outcome:
      'Participants gain practical knowledge, develop leadership capacity, and improve their long-term life direction.',
  },
  {
    badge: 'Community development / social cohesion',
    title: 'Community Building and Social Support',
    who: 'Individuals and families across Pretoria North and surrounding communities experiencing isolation or a lack of social connection.',
    problem:
      'Social isolation is a driver of mental health decline, substance abuse, and community breakdown. Many people in our area have no consistent community to belong to.',
    provides:
      'Weekly community gatherings, small group connections, community events, and structured volunteer engagement.',
    outcome:
      'Stronger social bonds, reduced isolation, and increased participation in positive community structures.',
  },
  {
    badge: 'Poverty relief / humanitarian aid',
    title: 'Poverty Relief and Humanitarian Support',
    who: 'Individuals and families in Pretoria North, Akasia, Shosanguve, and surrounding communities facing immediate material need.',
    problem:
      'Poverty is not only a financial condition. It limits access to food, healthcare, education, and safety. Without direct intervention, families in crisis cannot stabilize.',
    provides:
      'Food assistance, basic needs support, emergency relief, and community outreach to identify and assist those in need.',
    outcome:
      'Reduced immediate hardship and improved access to basic necessities for vulnerable families.',
  },
  {
    badge: 'Family support services',
    title: 'Family and Life Guidance Services',
    who: 'Individuals and families in Pretoria North and surrounding areas navigating relationship breakdown, parenting challenges, or behavioral struggles.',
    problem:
      'Without structured guidance, families in crisis often have nowhere to turn. Relationship breakdown, poor parenting support, and untreated behavioral patterns affect entire households and communities.',
    provides:
      'Marriage and relationship guidance, parenting support, mentorship programs, and structured behavioral support for addiction and life challenges.',
    outcome:
      'Stronger family units, improved decision-making, and healthier patterns of behavior across households.',
  },
  {
    badge: 'Social inclusion / community integration',
    title: 'Community Integration and Belonging',
    who: 'New visitors, first-time attendees, and individuals at risk of disengaging from community.',
    problem:
      'Many people attend a community once and never return — not because they were unwelcome, but because no one followed up. Without structured integration, people fall through the gaps.',
    provides:
      'First-time visitor follow-up, structured integration pathways, volunteer placement, and long-term community engagement tracking.',
    outcome:
      'Increased sense of belonging, stronger long-term engagement, and measurable growth in community participation.',
  },
]

export default function CommunityImpactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-16 pb-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal-200 font-semibold text-sm uppercase tracking-wider mb-4">
            Community Impact · Pretoria North
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            What We Do and Who We Serve
          </h1>
          <p className="text-teal-100 text-lg leading-relaxed mb-8">
            Fountain of Grace International is a registered NPO (316-193) based in Pretoria North. We run structured
            programs that address real challenges in our community — from emotional distress and family breakdown to
            poverty and social isolation.
          </p>
          <div className="inline-block bg-white text-[#008080] rounded-xl px-8 py-5 shadow-sm text-left">
            <p className="font-extrabold text-lg">NPO Registration Number: 316-193</p>
            <p className="text-sm font-medium text-[#7d7d7d] mt-1">
              Registered under the Nonprofit Organisations Act, 71 of 1997
            </p>
            <p className="text-xs text-gray-400 mt-1">South African Department of Social Development</p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <div className="space-y-4 text-[#7d7d7d] leading-relaxed text-lg">
            <p>
              We serve individuals and families across Pretoria North, Akasia, Orchards, Shosanguve, Montana,
              Wonderboom, Suiderberg, Amandasig, Rosslyn, and surrounding areas. Every program is built around a
              specific problem, a clear support structure, and a measurable outcome.
            </p>
            <p>
              Every rand donated goes toward delivering support directly into the hands of people who need it. As a
              registered NPO (No: 316-193), we are accountable to the South African Department of Social Development
              and publish transparent reporting to our donors and partners.
            </p>
          </div>
        </div>
      </section>

      {/* 6 PROGRAM CARDS */}
      <section className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="section-container max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Programs</h2>
          <p className="text-[#7d7d7d] mb-10">
            Six active programs. Each built around a specific problem and a measurable outcome.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {programs.map((p) => (
              <article
                key={p.title}
                className="bg-white rounded-xl border border-gray-100 border-t-4 border-t-[#008080] p-7 flex flex-col shadow-[0_2px_12px_rgba(42,157,244,0.06)] hover:shadow-[0_6px_24px_rgba(0,121,107,0.1)] transition-shadow duration-200"
              >
                <span className="inline-block self-start bg-[#f0f9f7] text-[#008080] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {p.badge}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-5 leading-snug">{p.title}</h3>
                <div className="flex flex-col gap-4 flex-1 mb-6">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#008080] mb-1">Who we serve</span>
                    <p className="text-sm text-[#555] leading-relaxed">{p.who}</p>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#008080] mb-1">The problem</span>
                    <p className="text-sm text-[#555] leading-relaxed">{p.problem}</p>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#008080] mb-1">What we provide</span>
                    <p className="text-sm text-[#555] leading-relaxed">{p.provides}</p>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#008080] mb-1">Outcome</span>
                    <p className="text-sm text-gray-800 font-semibold leading-relaxed">{p.outcome}</p>
                  </div>
                </div>
                <hr className="border-gray-100 mb-5" />
                <Link href="/donate" className="btn-primary block text-center text-sm">
                  Support this program
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* USE OF FUNDS */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How Your Support Reaches People</h2>
          <p className="text-[#7d7d7d] mb-8 leading-relaxed">
            We publish a transparent breakdown of how funds are used. Every donation is a vote of trust — this is how
            we honour it.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-6 font-semibold text-gray-700">Category</th>
                  <th className="text-left py-3 font-semibold text-gray-700">Allocation (%)</th>
                </tr>
              </thead>
              <tbody className="text-[#7d7d7d]">
                {[
                  { cat: 'Food and basic aid', pct: '58%' },
                  { cat: 'Program materials and logistics', pct: '14%' },
                  { cat: 'Operational costs (admin, compliance)', pct: '28%' },
                ].map((row) => (
                  <tr key={row.cat} className="border-b border-gray-100">
                    <td className="py-3 pr-6">{row.cat}</td>
                    <td className="py-3 font-semibold text-[#008080]">{row.pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">Donation Transparency Statement</h3>
            <div className="space-y-3 text-sm text-[#7d7d7d] leading-relaxed">
              <p>
                Fountain of Grace International is registered under the Nonprofit Organisations Act, 71 of 1997 (NPO
                No: 316-193). All donations received are used exclusively for the programs and operational costs of
                the organisation.
              </p>
              <p>
                No donation funds are used for personal benefit of the pastoral team or any individual connected to
                the organisation. Financial records are maintained and available to donors and the Department of
                Social Development upon request.
              </p>
              <p>
                We will never solicit donations under false or exaggerated premises. If you have any question about
                how your donation was used, contact us directly and we will answer specifically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CTA PATHS */}
      <section className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Get involved — three ways</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-sm transition-shadow">
              <div className="text-4xl mb-3" aria-hidden="true">💳</div>
              <h3 className="font-bold text-gray-900 mb-2">Donate</h3>
              <p className="text-sm text-[#7d7d7d] leading-relaxed mb-5">
                Your donation goes directly into programs that serve people in Pretoria North. Every amount counts.
              </p>
              <Link href="/donate" className="btn-teal text-sm w-full block">
                Donate Now
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-sm transition-shadow">
              <div className="text-4xl mb-3" aria-hidden="true">🙌</div>
              <h3 className="font-bold text-gray-900 mb-2">Volunteer With Us</h3>
              <p className="text-sm text-[#7d7d7d] leading-relaxed mb-5">
                No prior experience required. Fill in the form below — we will show you exactly what to do.
              </p>
              <Link href="/volunteer" className="btn-teal text-sm w-full block">
                Volunteer With Us
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-sm transition-shadow">
              <div className="text-4xl mb-3" aria-hidden="true">🤝</div>
              <h3 className="font-bold text-gray-900 mb-2">Partner With Us</h3>
              <p className="text-sm text-[#7d7d7d] leading-relaxed mb-5">
                Organisations looking to partner with a verified NPO in Pretoria North — we welcome the conversation.
              </p>
              <Link href="/contact" className="btn-teal text-sm w-full block">
                Contact Us to Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section id="volunteer-form" className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Volunteer Application</h2>
          <p className="text-[#7d7d7d] mb-8 leading-relaxed">
            No experience needed. Fill in your details and we will reach out with next steps.
          </p>
          <form action="#" method="POST" className="space-y-5" aria-label="Volunteer application form">
            <div>
              <label htmlFor="vol-name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="vol-name" name="name" type="text" required autoComplete="name"
                placeholder="First and last name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#008080]"
              />
            </div>
            <div>
              <label htmlFor="vol-phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="vol-phone" name="phone" type="tel" required autoComplete="tel"
                placeholder="+27 82 000 0000"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#008080]"
              />
            </div>
            <div>
              <label htmlFor="vol-whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Number
              </label>
              <input
                id="vol-whatsapp" name="whatsapp" type="tel" autoComplete="tel"
                placeholder="If different from above"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#008080]"
              />
            </div>
            <div>
              <label htmlFor="vol-availability" className="block text-sm font-medium text-gray-700 mb-1">
                Availability
              </label>
              <input
                id="vol-availability" name="availability" type="text"
                placeholder="e.g. Weekends, Saturday mornings"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#008080]"
              />
            </div>
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700 mb-2">Areas of interest</legend>
              <div className="space-y-2">
                {['Food programs', 'Administration', 'Events', 'Other'].map((area) => (
                  <label key={area} className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox" name="areas"
                      value={area.toLowerCase().replace(' ', '_')}
                      className="w-4 h-4 accent-[#008080] rounded"
                    />
                    {area}
                  </label>
                ))}
              </div>
            </fieldset>
            <button type="submit" className="w-full btn-teal py-4 text-base">
              Submit Volunteer Application
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="section-container max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions about our NPO work</h2>
          <dl className="space-y-0">
            <div className="faq-block">
              <dt className="font-semibold text-gray-900 mb-2">
                Is Fountain of Grace International a registered NPO in South Africa?
              </dt>
              <dd className="text-[#7d7d7d] leading-relaxed">
                Yes. Fountain of Grace International is registered under the Nonprofit Organisations Act, 71 of 1997,
                with NPO Number 316-193. The organisation is based in Pretoria North and runs community programs
                serving vulnerable individuals and families.
              </dd>
            </div>
            <div className="faq-block">
              <dt className="font-semibold text-gray-900 mb-2">
                How do I volunteer with an NPO in Pretoria North?
              </dt>
              <dd className="text-[#7d7d7d] leading-relaxed">
                To volunteer with Fountain of Grace International in Pretoria North, complete the{' '}
                <Link href="/volunteer" className="text-[#008080] font-semibold hover:underline">volunteer form here</Link>{' '}
                or send a WhatsApp to +27 75 259 2555. No prior experience is required.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* PLAN YOUR VISIT CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-3">
            You are also welcome on Sunday
          </p>
          <h2 className="text-2xl font-bold text-white mb-4">Come and see the community behind the work.</h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
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
              Pretoria North, Gauteng, operating under the Nonprofit Organisations Act 71 of 1997. We run six
              community programs providing direct practical support to individuals and families across Pretoria North,
              Akasia, Orchards, Shosanguve, Montana, Wonderboom, Suiderberg, Amandasig, and Rosslyn. FGI accepts
              donations via PayPal and direct EFT, and welcomes volunteers and organisational partnerships.
              Contact us on{' '}
              <a href="tel:+27752592555" className="text-[#008080] font-semibold">+27 75 259 2555</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
