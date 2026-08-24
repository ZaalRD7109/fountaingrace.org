import Link from 'next/link'

const CHANNEL_URL = 'https://whatsapp.com/channel/0029Va95PH97IUYcIyCgUb3H'

// Shared devotional sign-up block. WhatsApp channel is the primary way to
// follow (free, one broadcast reaches everyone, followers never see each
// other's number, leave any time). Email is a small secondary fallback.
export default function DevotionalChannelCTA() {
  return (
    <section className="bg-[#f0fafa] py-14 px-4 sm:px-6 border-t border-[#e0f4f4]">
      <div className="section-container max-w-xl text-center">
        <p className="text-[#006b6b] font-semibold text-xs uppercase tracking-widest mb-3">
          Free · Leave any time
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Get the message on your phone
        </h2>
        <p className="text-[#595959] leading-relaxed mb-7">
          Pastor Ricardo posts a short devotional to the WhatsApp channel -
          practical, direct, and connected to the Sunday message. Follow the
          channel to get it, and leave whenever you like.
        </p>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25d366] text-[#0a3d1c] font-bold text-lg px-9 py-4 rounded-lg hover:bg-[#1ebe5d] transition-colors"
        >
          Follow on WhatsApp →
        </a>
        <p className="text-sm text-[#595959] mt-6">
          Prefer email?{' '}
          <a
            href="mailto:info@fountaingrace.org?subject=Weekly%20Devotional%20Signup&body=Hi%2C%20please%20add%20me%20to%20the%20weekly%20devotional%20email%20list.%0A%0AMy%20name%20is%3A%20"
            className="text-[#0d6fbf] font-semibold underline hover:text-[#006b6b]"
          >
            Email us to be added
          </a>
        </p>
        <p className="text-xs text-[#595959] mt-6 max-w-md mx-auto leading-relaxed">
          Following the channel keeps your number private - other followers cannot
          see it. If you email, Fountain of Grace International (NPO 316-193) uses your
          address only to send the devotional, never sells or shares it, and you can
          stop any time by replying STOP. See our{' '}
          <Link href="/privacy-policy" className="underline hover:text-[#006b6b]">Privacy Policy</Link>.
        </p>
      </div>
    </section>
  )
}
