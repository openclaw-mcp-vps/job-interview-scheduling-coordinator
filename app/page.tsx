export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          HR &amp; Hiring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Coordinate complex interview schedules{' '}
          <span className="text-[#58a6ff]">automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop juggling calendars. Our availability-matching engine handles multi-round scheduling across every interviewer and candidate — with real-time conflict detection and instant rescheduling.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get started for $12/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Availability Matching', desc: 'Automatically finds open slots across all participants in seconds.' },
            { title: 'Conflict Detection', desc: 'Real-time alerts prevent double-bookings before they happen.' },
            { title: 'Auto-Rescheduling', desc: 'Cancellations trigger instant re-coordination with zero manual effort.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-sm text-[#8b949e] mb-6">per month, cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited candidates & interviewers',
              'Multi-round scheduling workflows',
              'Real-time conflict detection',
              'Automatic rescheduling engine',
              'Email notifications for all parties',
              'Calendar integrations (Google, Outlook)'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start scheduling smarter
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does automatic rescheduling work?',
              a: 'When a cancellation occurs, the system immediately checks all participants\u2019 calendars, finds the next available slot that satisfies every constraint, and sends updated invites — no manual intervention needed.'
            },
            {
              q: 'Which calendar systems are supported?',
              a: 'Google Calendar and Microsoft Outlook are fully supported via OAuth. Any CalDAV-compatible calendar can also be connected.'
            },
            {
              q: 'Can I manage multiple open roles at once?',
              a: 'Yes. Each role gets its own scheduling pipeline with independent rounds, interviewers, and candidate queues. There is no limit on concurrent roles.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Interview Scheduling Coordinator. All rights reserved.
      </footer>
    </main>
  )
}
