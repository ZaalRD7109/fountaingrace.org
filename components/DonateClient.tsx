'use client'

import { useState } from 'react'
import Link from 'next/link'

const PRESETS = ['150', '350', '600', '1000']

const IMPACT: Record<string, string> = {
  '150':  'R150 covers transport for an outreach team',
  '350':  'R350 feeds a family in Pretoria North for a week',
  '600':  'R600 supports one month of recovery and prayer',
  '1000': 'R1 000 equips one person in Impact Seed training',
}

const PROGRAMS = [
  {
    icon: '🍱',
    title: 'Food Parcels & Family Relief',
    desc: 'Emergency food parcels distributed to vulnerable households across Pretoria North and surrounding suburbs.',
    example: 'R350 = one family\'s food for a week',
  },
  {
    icon: '🙏',
    title: 'Prayer Line & Recovery Support',
    desc: 'A dedicated prayer and support line for people dealing with addiction, grief, and personal crisis — connecting people to real help.',
    example: 'R600 = one month of recovery support',
  },
  {
    icon: '💼',
    title: 'Impact Seed Training',
    desc: 'Entrepreneurship and skills training that rebuilds dignity through practical work and economic independence.',
    example: 'R1 000 = equips one person in the programme',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family Restoration',
    desc: 'Counselling, support groups, and community care for families under pressure — marriages, parenting, and crisis support.',
    example: 'R500 = supports a family for one month',
  },
  {
    icon: '⛪',
    title: 'Sunday Gatherings & Discipleship',
    desc: 'Maintaining the weekly church service, teaching resources, and discipleship programmes that equip our community.',
    example: 'R200 = Sunday operations contribution',
  },
  {
    icon: '🌱',
    title: 'Youth & Next Generation',
    desc: 'Resources for young people — mentorship, spiritual development, and practical life skills for Pretoria North\'s youth.',
    example: 'R400 = youth programme resources',
  },
]

const FUND_SLICES = [
  { pct: 58, start: 0,  color: '#FFD600', label: 'Food & Basic Aid' },
  { pct: 14, start: 58, color: '#ff8c42', label: 'Programme Materials & Logistics' },
  { pct: 28, start: 72, color: '#4FC3F7', label: 'Operational Costs' },
]

const TRUST_CARDS = [
  {
    icon: '📋',
    title: 'Registered NPO',
    desc: 'Officially registered with the Department of Social Development under NPO 316-193. Publicly verifiable.',
  },
  {
    icon: '🏦',
    title: 'Dedicated Ministry Account',
    desc: 'All donations go into a dedicated FNB account used exclusively for church and NPO purposes.',
  },
  {
    icon: '📊',
    title: 'Financial Accountability',
    desc: 'Finances are reviewed by church leadership and governance structures. We operate with integrity and openness.',
  },
  {
    icon: '📧',
    title: 'Direct Contact',
    desc: 'You can email or WhatsApp us directly with any question about how funds are used. We will answer.',
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    desc: 'Online payments are processed by PayPal — a secure, trusted payment platform.',
  },
  {
    icon: '🌍',
    title: 'International Giving',
    desc: 'International donors can give via PayPal in any currency. All funds are used on the ground in Pretoria North.',
  },
]

export default function DonateClient() {
  const [amount, setAmount] = useState('350')

  const impactText =
    IMPACT[amount] ?? `R${parseInt(amount) || 0} goes directly to FGI programmes`

  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-teal-200 font-semibold text-xs uppercase tracking-wider mb-3">
            Support the work · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Your giving changes lives in Pretoria North.
          </h1>
          <p className="text-teal-100 text-base leading-relaxed mb-5">
            Every rand you give goes directly to real people in our community — food for
            families, support for recovery, training for those rebuilding their lives.
          </p>
          <span className="inline-block bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            Registered NPO 316-193 · Dept of Social Development, South Africa
          </span>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────── */}
      <div className="bg-[#f0fafa] border-b-2 border-[#e8eef8] py-5 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3 text-center text-sm">
          {[
            { label: 'Registered NPO', value: '316-193' },
            { label: 'Registered Under', value: 'Dept of Social Development' },
            { label: 'Bank', value: 'FNB (First National Bank)' },
            { label: 'Contact', value: 'info@fountaingrace.org' },
            { label: 'Location', value: 'Pretoria North, Gauteng' },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-bold text-[#2a9df4] text-sm">{item.value}</p>
              <p className="text-[#7d7d7d] text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHERE YOUR MONEY GOES ────────────────────────────────── */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#008080] font-semibold text-xs uppercase tracking-widest mb-2">
              100% Transparency
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2a9df4] mb-3">
              Where Your Money Goes — Specifically
            </h2>
            <p className="text-[#7d7d7d] max-w-xl mx-auto leading-relaxed">
              No vague promises. Here are the named programmes your donation funds directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map((p) => (
              <div
                key={p.title}
                className="bg-[#f0fafa] rounded-2xl p-6 border-l-4 border-[#FFD600]"
              >
                <div className="text-3xl mb-2" aria-hidden="true">{p.icon}</div>
                <h3 className="font-bold text-[#2a9df4] text-sm mb-1">{p.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed mb-3">{p.desc}</p>
                <p className="text-[#008080] font-semibold text-xs">{p.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GIVE FORM ────────────────────────────────────────────── */}
      <section className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2a9df4] text-center mb-10">
            Choose How You Want to Give
          </h2>

          {/* Amount pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setAmount(p)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold border-2 transition-all duration-150 ${
                  amount === p
                    ? 'bg-[#FFD600] text-[#1a1a1a] border-[#FFD600] shadow-[0_3px_10px_rgba(255,214,0,0.4)]'
                    : 'bg-white text-[#2a9df4] border-[#e0f0ff] hover:border-[#008080] hover:text-[#008080]'
                }`}
              >
                R{p}
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div className="flex items-center gap-2 max-w-xs mx-auto mb-2">
            <span className="text-lg font-bold text-[#2a9df4]">R</span>
            <input
              id="amount"
              type="number"
              min="10"
              step="10"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 border-2 border-[#e0f0ff] rounded-xl px-4 py-3 text-lg font-bold text-[#2a9df4] text-center focus:outline-none focus:border-[#008080]"
              aria-label="Custom donation amount in Rand"
            />
          </div>
          <p className="text-center text-[#008080] font-semibold text-sm mb-10 min-h-[1.25rem]">
            {impactText}
          </p>

          <div className="space-y-5">

            {/* PayPal */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(42,157,244,0.06)] p-7">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Give via PayPal</h3>
              <p className="text-sm text-[#7d7d7d] mb-5">
                For international donors — give securely in your own currency from anywhere
                in the world.
              </p>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
              >
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="info@fountaingrace.org" />
                <input type="hidden" name="item_name" value="Donation to Fountain of Grace International — NPO 316-193" />
                <input type="hidden" name="currency_code" value="ZAR" />
                <input type="hidden" name="amount" value={amount} />
                <input type="hidden" name="notify_url" value="https://rdhtphruegorbeigyhto.supabase.co/functions/v1/paypal-ipn" />
                <input type="hidden" name="return" value="https://www.fountaingrace.org/donate" />
                <input type="hidden" name="cancel_return" value="https://www.fountaingrace.org/donate" />
                <input type="hidden" name="no_shipping" value="1" />
                <button
                  type="submit"
                  className="btn-primary w-full text-center block"
                >
                  Give R{amount} with PayPal →
                </button>
              </form>
            </div>

            {/* EFT */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(42,157,244,0.06)] p-7">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Direct EFT (Bank Transfer)</h3>
              <p className="text-sm text-[#7d7d7d] mb-5">
                Transfer directly to our FNB account using your banking app or internet
                banking. Use your name as the reference.
              </p>
              <div className="bg-[#f0f9f7] rounded-xl p-5 text-sm space-y-2">
                {[
                  ['Account Name', 'Fountain of Grace International'],
                  ['Bank', 'FNB (First National Bank)'],
                  ['Account Type', 'Cheque / Current'],
                  ['Account Number', '63132764499'],
                  ['Branch Code', '250655'],
                  ['Reference', 'Your Name / Donation'],
                ].map(([label, value]) => (
                  <p key={label}>
                    <span className="font-semibold text-[#2a9df4] inline-block w-36">{label}:</span>
                    <span className="text-gray-700">{value}</span>
                  </p>
                ))}
              </div>
              <p className="text-xs text-[#7d7d7d] mt-4">
                For a receipt, email proof of payment to{' '}
                <a
                  href="mailto:info@fountaingrace.org"
                  className="text-[#008080] font-semibold hover:underline"
                >
                  info@fountaingrace.org
                </a>.
              </p>
            </div>

            {/* WhatsApp to give */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(42,157,244,0.06)] p-7">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Give via WhatsApp</h3>
              <p className="text-sm text-[#7d7d7d] mb-5">
                Not sure which method to use? Message us directly and we will help you give
                in the way that works best for you.
              </p>
              <a
                href="https://wa.me/27752592555?text=Hi%2C%20I%20would%20like%20to%20make%20a%20donation%20to%20Fountain%20of%20Grace%20International"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#25d366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1ebe5d] transition-colors"
              >
                WhatsApp Us →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW WE SPEND ─────────────────────────────────────────── */}
      {(() => {
        const r = 70
        const C = 2 * Math.PI * r
        return (
          <section className="bg-[#008080] py-12 px-4 sm:px-6 text-white">
            <div className="max-w-3xl mx-auto">
              <p className="text-teal-200 font-semibold text-xs uppercase tracking-widest mb-6 text-center">
                Every rand accounted for
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-8 bg-white/[0.07] border border-white/10 rounded-2xl p-7">
                {/* Donut chart */}
                <div className="shrink-0 flex flex-col items-center">
                  <p className="text-[#FFD600] font-semibold text-xs uppercase tracking-widest mb-4 text-center">
                    How We Spend
                  </p>
                  <svg viewBox="0 0 200 200" width="160" height="160" aria-hidden="true">
                    <g transform="rotate(-90 100 100)">
                      {FUND_SLICES.map((seg) => (
                        <circle
                          key={seg.label}
                          cx="100" cy="100" r={r}
                          fill="none"
                          stroke={seg.color}
                          strokeWidth="40"
                          strokeDasharray={`${(seg.pct / 100 * C) - 3} ${C}`}
                          strokeDashoffset={C * (1 - seg.start / 100)}
                        />
                      ))}
                    </g>
                    <text x="100" y="96" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">FGI</text>
                    <text x="100" y="112" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="10">2025</text>
                  </svg>
                </div>
                {/* Legend + bars */}
                <div className="flex flex-col gap-5 flex-1 w-full">
                  {FUND_SLICES.map((seg) => (
                    <div key={seg.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: seg.color }} aria-hidden="true" />
                          <span className="text-white/80 text-sm">{seg.label}</span>
                        </div>
                        <span className="text-sm font-bold" style={{ color: seg.color }}>{seg.pct}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${seg.pct}%`, backgroundColor: seg.color }} />
                      </div>
                    </div>
                  ))}
                  <p className="text-white/40 text-xs mt-1">Based on 2025 operational figures.</p>
                </div>
              </div>
            </div>
          </section>
        )
      })()}

      {/* ── TRANSPARENCY / TRUST ─────────────────────────────────── */}
      <section className="bg-[#008080] py-16 px-4 sm:px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#FFD600] font-semibold text-xs uppercase tracking-widest mb-2">
              Why you can trust us
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Your Money Is Safe. Here Is How We Are Accountable.
            </h2>
            <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
              We do not have Section 18A tax certificates yet — but we operate with full
              integrity and transparency. Here is what that means in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {TRUST_CARDS.map((card) => (
              <div key={card.title} className="bg-white/[0.06] border border-white/10 rounded-2xl p-5">
                <span className="text-2xl mb-3 block" aria-hidden="true">{card.icon}</span>
                <h3 className="text-[#FFD600] font-bold text-sm mb-1">{card.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* NPO details block */}
          <div className="bg-[rgba(255,214,0,0.08)] border border-[rgba(255,214,0,0.2)] rounded-2xl p-7 text-sm leading-loose">
            {[
              ['NPO Number', '316-193'],
              ['Registered Under', 'Department of Social Development, South Africa'],
              ['Physical Address', '323 B Danie Theron Street, Pretoria North, Gauteng, 0182'],
              ['Email', 'info@fountaingrace.org'],
              ['WhatsApp', '+27 75 259 2555'],
              ['Section 18A', 'Tax certificates are not yet available. We are working toward this status.'],
            ].map(([label, value]) => (
              <p key={label} className="text-white/80">
                <span className="text-[#FFD600] font-bold inline-block w-44">{label}:</span>
                {label === 'Email' ? (
                  <a href="mailto:info@fountaingrace.org" className="text-[#FFD600] hover:underline">{value}</a>
                ) : label === 'WhatsApp' ? (
                  <a href="https://wa.me/27752592555" target="_blank" rel="noopener noreferrer" className="text-[#FFD600] hover:underline">{value}</a>
                ) : (
                  value
                )}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER CTA ──────────────────────────────────────────── */}
      <section className="bg-[#008080] py-14 px-4 sm:px-6 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold mb-3">Want to do more than donate?</h2>
          <p className="text-teal-100 mb-8 leading-relaxed">
            Volunteer with us, bring your organisation on board, or come and see the
            community in person on a Sunday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/community-impact"
              className="inline-block bg-[#FFD600] text-[#1a1a1a] font-bold px-7 py-3 rounded-lg hover:bg-[#e6c200] transition-colors text-sm"
            >
              See Our Programmes
            </Link>
            <Link
              href="/plan-your-visit"
              className="inline-block bg-white text-[#008080] font-bold px-7 py-3 rounded-lg hover:bg-teal-50 transition-colors text-sm"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
