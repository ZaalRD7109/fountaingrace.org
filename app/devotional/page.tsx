'use client';
// FGI website - /devotional page (app/devotional/page.tsx in the FGI repo).
// Shows today's devotional (fetched live from the daily-devotional edge function,
// so the page updates itself at 06:00 with NO site rebuild). Sundays it invites
// people to the 09:00 service instead. Cellphone-first: one column, big type,
// one big WhatsApp share button.
//
// NOTE for the FGI repo: this is a client component; the static export serves the
// shell and the content arrives on load. Old rows have only `content` (plain text),
// new rows have the structured fields - both render.

import { useEffect, useState } from 'react';

const FN_URL = 'https://rmurdihrhcxevtzkrbmx.supabase.co/functions/v1/daily-devotional';
const PAGE_URL = 'https://www.fountaingrace.org/devotional';

type Devotional = {
  sunday: boolean;
  stale?: boolean;
  date?: string;
  day_of_year?: number;
  headline?: string | null;
  verse_ref?: string | null;
  verse_text?: string | null;
  explanation?: string | null;
  application?: string | null;
  reflection_question?: string | null;
  prayer?: string | null;
  share_line?: string | null;
  content?: string | null;
  message?: string;
  plan_visit?: string;
};

function waShareUrl(d: Devotional): string {
  const line = d.headline
    ? `${d.headline}\n"${d.verse_text}" - ${d.verse_ref} (KJV)`
    : 'Today’s devotional from Fountain of Grace International';
  const text = `${line}\n\nRead it here: ${PAGE_URL}?utm_source=whatsapp&utm_medium=share&utm_campaign=devotional`;
  return 'https://wa.me/?text=' + encodeURIComponent(text);
}

export default function DevotionalPage() {
  const [d, setD] = useState<Devotional | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch(FN_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then(setD)
      .catch(() => setErr(true));
  }, []);

  return (
    <main className="mx-auto max-w-xl px-5 py-10 text-gray-900">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
        Daily Devotional
      </p>

      {err && (
        <p className="mt-6 text-lg">
          We could not load today&apos;s devotional. Please try again in a moment.
        </p>
      )}

      {!d && !err && <p className="mt-6 text-lg">Loading today&apos;s devotional...</p>}

      {d?.sunday && (
        <section className="mt-4">
          <h1 className="text-3xl font-bold leading-tight">It&apos;s Sunday.</h1>
          <p className="mt-4 text-lg">{d.message}</p>
          <a
            href={d.plan_visit || '/plan-your-visit'}
            className="mt-8 block rounded-xl bg-teal-700 px-6 py-4 text-center text-lg font-semibold text-white"
          >
            Plan your visit - Sunday 09:00
          </a>
        </section>
      )}

      {d && !d.sunday && (
        <section className="mt-2">
          <p className="text-4xl font-extrabold text-amber-500">Day {d.day_of_year}</p>

          {d.headline ? (
            // one flowing devotional, no section labels; scripture AFTER the
            // opening so the verse lands as God's answer (Ricardo, 2026-07-04)
            <>
              <h1 className="mt-4 text-3xl font-bold leading-tight">{d.headline}</h1>

              <p className="mt-6 text-lg leading-relaxed">{d.explanation}</p>

              <blockquote className="mt-6 border-l-4 border-amber-400 pl-4 text-lg italic text-gray-700">
                &quot;{d.verse_text}&quot;
                <footer className="mt-2 not-italic font-semibold text-teal-700">
                  {d.verse_ref} (KJV)
                </footer>
              </blockquote>

              <p className="mt-6 text-lg leading-relaxed">{d.application}</p>

              <p className="mt-6 text-lg leading-relaxed">{d.reflection_question}</p>

              <p className="mt-6 text-lg italic leading-relaxed">{d.prayer}</p>

              <p className="mt-8 text-lg font-semibold">{d.share_line}</p>
            </>
          ) : (
            // old-format fallback: render the plain content
            <pre className="mt-4 whitespace-pre-wrap font-sans text-lg leading-relaxed">
              {d.content}
            </pre>
          )}

          <a
            href={waShareUrl(d)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-xl bg-[#25D366] px-6 py-4 text-center text-lg font-bold text-white"
          >
            Share on WhatsApp
          </a>

          <a
            href="https://wa.me/27752592555"
            className="mt-4 block text-center text-base text-teal-700 underline"
          >
            Need prayer? Send us a prayer request
          </a>
        </section>
      )}
    </main>
  );
}
