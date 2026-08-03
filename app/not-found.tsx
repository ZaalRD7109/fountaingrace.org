import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found | Fountain of Grace International',
  description:
    'The page you were looking for could not be found. Plan your visit, watch a sermon, or head back home.',
  robots: 'noindex, follow',
}

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-xl text-center">
        <p className="text-[#0d6fbf] font-semibold text-sm tracking-wide uppercase">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#000000]">
          We could not find that page
        </h1>
        <p className="mt-4 text-[#595959]">
          The link may be old or mistyped. Here are a few good places to go next.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/plan-your-visit"
            className="rounded-[30px] bg-[#0d6fbf] px-6 py-3 font-semibold text-white hover:opacity-90 transition"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/sermons"
            className="rounded-[30px] bg-[#ffd700] px-6 py-3 font-semibold text-[#000000] hover:opacity-90 transition"
          >
            Watch a Sermon
          </Link>
        </div>

        <div className="mt-6 text-sm text-[#595959]">
          <Link href="/" className="text-[#006b6b] hover:underline font-medium">
            Home
          </Link>
          <span className="mx-2">·</span>
          <Link href="/faq" className="text-[#006b6b] hover:underline font-medium">
            FAQ
          </Link>
          <span className="mx-2">·</span>
          <Link href="/contact" className="text-[#006b6b] hover:underline font-medium">
            Contact
          </Link>
        </div>
      </div>
    </main>
  )
}
