import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'
import { sendEmail } from '../_shared/resend.ts'

const FOLLOWUP_DAYS = [0, 1, 3, 7, 14, 21, 28, 35, 42]

function daysSince(dateStr: string): number {
  return Math.floor((Date.now() - new Date(dateStr).getTime()) / 86_400_000)
}

function getEmailForStage(stage: number, name: string, email: string): { subject: string; html: string } | null {
  const firstName = name.split(' ')[0]

  const emails: Record<number, { subject: string; html: string }> = {
    1: {
      subject: 'Before Sunday - a few things to know',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:24px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px">Fountain of Grace International</h1>
        </div>
        <div style="padding:32px 24px">
          <p>Hi ${firstName},</p>
          <p>Tomorrow is Sunday. Or very close to it. We want to make sure your first visit is as simple as possible, so here is everything you need in one place.</p>
          <p style="font-weight:bold;color:#008080">Where to go:</p>
          <p>323 B Danie Theron Street, Pretoria North, Gauteng<br>(WhatsApp us on +27 75 259 2555 for exact parking instructions)</p>
          <p style="font-weight:bold;color:#008080">When to arrive:</p>
          <p>09:00 is when we start. Come at 08:45 so you are settled before the music begins. Someone will be at the door watching for you.</p>
          <p style="font-weight:bold;color:#008080">What to bring:</p>
          <p>Just yourself. Maybe a friend.</p>
          <p style="font-weight:bold;color:#008080">What to expect:</p>
          <p>You will not be singled out, asked to stand, or put in any uncomfortable situation. You can sit, observe, and take it in at your own pace.</p>
          <blockquote style="border-left:4px solid #008080;padding-left:16px;color:#555;font-style:italic;margin:24px 0">
            "Come unto me, all ye that labour and are heavy laden, and I will give you rest." - Matthew 11:28 (KJV)
          </blockquote>
          <p>See you Sunday.</p>
          <p><strong>Pastor Ricardo Zaal</strong><br>Fountain of Grace International<br>
          <a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a></p>
        </div>
      </div>`,
    },
    2: {
      subject: 'How was it?',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:24px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px">Fountain of Grace International</h1>
        </div>
        <div style="padding:32px 24px">
          <p>Hi ${firstName},</p>
          <p>If you came on Sunday, we hope it was exactly what you needed. We would love to hear from you - just reply to this email with any question you have, or anything that was on your mind.</p>
          <p>If Sunday has not happened yet, no pressure. People visit when they are ready. We are still here, and you are still welcome.</p>
          <p style="font-weight:bold;color:#008080">Two things that might be useful right now:</p>
          <ul style="padding-left:20px;line-height:1.8">
            <li>Our sermon archive - watch recent messages from Pastor Ricardo at <a href="https://www.fountaingrace.org/sermons" style="color:#008080">fountaingrace.org/sermons</a></li>
            <li>The FAQ page - <a href="https://www.fountaingrace.org/faq" style="color:#008080">fountaingrace.org/faq</a></li>
          </ul>
          <p>And if there is something specific you are going through, you can submit a prayer request privately at <a href="https://www.fountaingrace.org/prayer" style="color:#008080">fountaingrace.org/prayer</a> - Pastor Ricardo reads every one personally.</p>
          <p>Warmly,<br><strong>Pastor Ricardo Zaal</strong><br>Fountain of Grace International</p>
        </div>
      </div>`,
    },
    3: {
      subject: 'One week on - something I want to share with you',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:24px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px">Fountain of Grace International</h1>
        </div>
        <div style="padding:32px 24px">
          <p>Hi ${firstName},</p>
          <p>A week ago you took a step and looked up Fountain of Grace International. That matters more than you might think.</p>
          <p>Most people who are looking for a church have been through something. A loss. A season that did not go as expected. A quiet restlessness. A feeling that something is missing.</p>
          <p>You do not have to explain any of that to walk through our doors.</p>
          <blockquote style="border-left:4px solid #008080;padding-left:16px;color:#555;font-style:italic;margin:24px 0">
            "He healeth the broken in heart, and bindeth up their wounds." - Psalm 147:3 (KJV)
          </blockquote>
          <p>That is what we believe church is for. Not to be impressive. Not to perform. To be the place where broken things get tended to.</p>
          <p>If you have questions - about the church, about faith, about anything - reply to this email or WhatsApp me directly on <a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a>.</p>
          <p>In grace,<br><strong>Pastor Ricardo Zaal</strong><br>Fountain of Grace International</p>
        </div>
      </div>`,
    },
    4: {
      subject: 'Two weeks - have you found what you were looking for?',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:24px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px">Fountain of Grace International</h1>
        </div>
        <div style="padding:32px 24px">
          <p>Hi ${firstName},</p>
          <p>Two weeks since you filled in our form. I want to check in personally.</p>
          <p>Some people visit and immediately find what they have been looking for. Others take a few Sundays. Others are still deciding. Wherever you are in that process is fine.</p>
          <p>If there is anything standing between you and coming on a Sunday, I would like to know about it. Parking? Transport? Not sure what to say when you walk in? Unsure if this church is the right fit?</p>
          <p>None of those are small concerns. They are real, and I want to address them directly.</p>
          <p>Reply to this email with whatever is on your mind, or WhatsApp me on <a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a>. I respond personally, not through a team.</p>
          <blockquote style="border-left:4px solid #008080;padding-left:16px;color:#555;font-style:italic;margin:24px 0">
            "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit." - Psalm 34:18 (KJV)
          </blockquote>
          <p><strong>Pastor Ricardo Zaal</strong><br>Fountain of Grace International</p>
        </div>
      </div>`,
    },
    5: {
      subject: 'Something happening at FGI this Sunday',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:24px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px">Fountain of Grace International</h1>
        </div>
        <div style="padding:32px 24px">
          <p>Hi ${firstName},</p>
          <p>Three weeks have passed and I keep thinking about you.</p>
          <p>I want to make a direct invitation: come this Sunday.</p>
          <p>Not as a commitment. Not as a membership application. Just as one person walking through a door to see what is inside.</p>
          <p>Service is every Sunday at 09:00.<br>323 B Danie Theron Street, Pretoria North.</p>
          <p>If you need someone to sit with, I will be there. If you need parking sorted out in advance, WhatsApp us at <a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a> and we will meet you.</p>
          <blockquote style="border-left:4px solid #008080;padding-left:16px;color:#555;font-style:italic;margin:24px 0">
            "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you." - Matthew 7:7 (KJV)
          </blockquote>
          <p>Waiting to meet you on Sunday.</p>
          <p><strong>Pastor Ricardo Zaal</strong><br><a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a></p>
        </div>
      </div>`,
    },
    6: {
      subject: 'A month later - this is for you',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:24px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px">Fountain of Grace International</h1>
        </div>
        <div style="padding:32px 24px">
          <p>Hi ${firstName},</p>
          <p>It has been a month. I am not going to pretend I do not notice.</p>
          <p>I do not know what is happening in your life right now. But I do know that if you filled in the form on our website, something was prompting you.</p>
          <p>That prompting does not go away. It waits.</p>
          <p>I want you to know that Fountain of Grace International is not a place you have to be ready for. You can come as you are, with doubt, with questions, with nothing figured out. We have been through enough to know that is exactly how most people find their way in.</p>
          <p>If you would like to talk before you visit, I am available:</p>
          <ul style="padding-left:20px;line-height:1.8">
            <li>Email: <a href="mailto:pastor@fountaingrace.org" style="color:#008080">pastor@fountaingrace.org</a></li>
            <li>WhatsApp: <a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a></li>
          </ul>
          <p>No agenda. Just a conversation.</p>
          <blockquote style="border-left:4px solid #008080;padding-left:16px;color:#555;font-style:italic;margin:24px 0">
            "And I will give them a heart to know me, that I am the LORD: and they shall be my people, and I will be their God: for they shall return unto me with their whole heart." - Jeremiah 24:7 (KJV)
          </blockquote>
          <p>Still here,<br><strong>Pastor Ricardo Zaal</strong><br>Fountain of Grace International</p>
        </div>
      </div>`,
    },
    7: {
      subject: 'Five weeks - one thing I have learned about timing',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:24px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px">Fountain of Grace International</h1>
        </div>
        <div style="padding:32px 24px">
          <p>Hi ${firstName},</p>
          <p>Something I have learned in ministry: everyone finds their way in their own time. Some people come the first Sunday after filling in a form. Some come six months later. Some come in a moment of crisis when they have nowhere else to turn.</p>
          <p>All of them are equally welcome.</p>
          <blockquote style="border-left:4px solid #008080;padding-left:16px;color:#555;font-style:italic;margin:24px 0">
            "Wait on the LORD: be of good courage, and he shall strengthen thine heart: wait, I say, on the LORD." - Psalm 27:14 (KJV)
          </blockquote>
          <p>Waiting is not failure. Sometimes the right timing is not your timing.</p>
          <p>If you are in a hard season right now, we have a prayer request form at <a href="https://www.fountaingrace.org/prayer" style="color:#008080">fountaingrace.org/prayer</a>. It goes directly to me. Nothing is posted publicly. I read every one and pray over every one.</p>
          <p>You are not forgotten.</p>
          <p><strong>Pastor Ricardo Zaal</strong><br>Fountain of Grace International</p>
        </div>
      </div>`,
    },
    8: {
      subject: 'This is my last email - but the door stays open',
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:24px;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px">Fountain of Grace International</h1>
        </div>
        <div style="padding:32px 24px">
          <p>Hi ${firstName},</p>
          <p>I have been in touch with you over the last six weeks. This will be my last email in this sequence - I do not want to be in your inbox any longer than is welcome.</p>
          <p>But before I go, I want to say one thing clearly:</p>
          <p style="font-size:16px;font-weight:bold;color:#008080">Fountain of Grace International is open to you. Not when you have sorted out your life. Not when you are more ready. Right now. As you are.</p>
          <p>Every Sunday at 09:00.<br>323 B Danie Theron Street, Pretoria North.</p>
          <p>If you ever want to come, you are welcome. If you want to talk, reply to this email or WhatsApp Pastor Ricardo at <a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a>.</p>
          <blockquote style="border-left:4px solid #008080;padding-left:16px;color:#555;font-style:italic;margin:24px 0">
            "The Spirit and the bride say, Come. And let him that heareth say, Come. And let him that is athirst come. And whosoever will, let him take the water of life freely." - Revelation 22:17 (KJV)
          </blockquote>
          <p>That invitation has no expiry date.</p>
          <p>Warmly,<br><strong>Pastor Ricardo Zaal</strong><br>Fountain of Grace International<br>
          <a href="mailto:info@fountaingrace.org" style="color:#008080">info@fountaingrace.org</a> | <a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a><br>
          <a href="https://www.fountaingrace.org" style="color:#008080">www.fountaingrace.org</a></p>
        </div>
      </div>`,
    },
  }

  return emails[stage] ?? null
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders })
  }

  const authHeader = req.headers.get('Authorization') ?? ''
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  if (authHeader !== `Bearer ${serviceKey}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    serviceKey
  )

  const { data: visitors, error } = await supabase
    .from('visitor_submissions')
    .select('id, name, email, created_at, followup_stage')
    .eq('followup_done', false)
    .not('email', 'is', null)

  if (error) {
    console.error('Query error:', error)
    return new Response(JSON.stringify({ error: 'DB error' }), { status: 500 })
  }

  let sent = 0
  let skipped = 0

  for (const visitor of visitors ?? []) {
    const days = daysSince(visitor.created_at)
    const currentStage = visitor.followup_stage
    const nextStage = currentStage + 1

    if (nextStage > 8) {
      await supabase
        .from('visitor_submissions')
        .update({ followup_done: true })
        .eq('id', visitor.id)
      continue
    }

    const requiredDays = FOLLOWUP_DAYS[nextStage]
    if (days < requiredDays) {
      skipped++
      continue
    }

    const emailContent = getEmailForStage(nextStage, visitor.name, visitor.email)
    if (!emailContent) {
      skipped++
      continue
    }

    const ok = await sendEmail(visitor.email, emailContent.subject, emailContent.html)
    if (ok) {
      const isDone = nextStage >= 8
      await supabase
        .from('visitor_submissions')
        .update({
          followup_stage: nextStage,
          last_followup: new Date().toISOString(),
          followup_done: isDone,
        })
        .eq('id', visitor.id)
      sent++
    }
  }

  return new Response(JSON.stringify({ sent, skipped }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
})
