// app/careers/opening-qa-voice/page.tsx
'use client';
export default function QAVoiceOpening() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <main className="container mx-auto max-w-7xl px-4 py-10">
          <h1 className="text-3xl font-semibold">Quality Analyst – Voice (RingCentral)</h1>
          <p className="mt-1 text-sm text-slate-600">Mohali, Punjab (On-site) • 3+ years</p>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {/* Job Details */}
            <div className="prose max-w-none">
              <h2>Responsibilities</h2>
              <ul>
                <li>Calibrate QA scorecards and run audits</li>
                <li>Publish weekly quality insights and training needs</li>
                <li>Own coaching plans with Team Leads</li>
              </ul>

              <h2>Requirements</h2>
              <ul>
                <li>Strong English and documentation</li>
                <li>Experience with RingCentral or similar</li>
                <li>BPO QA experience</li>
              </ul>
            </div>

            {/* Application Form */}
            <form className="grid gap-3 rounded-xl border border-slate-200 p-6 shadow-sm" action="#" method="post">
              <h3 className="font-semibold text-lg">Apply now</h3>

              <input required placeholder="Full name" className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input required type="email" placeholder="Email" className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input placeholder="Phone" className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <textarea placeholder="Why you? (2–3 lines)" className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
              <button type="submit" className="rounded-xl bg-teal-600 px-4 py-2 font-semibold text-white hover:bg-teal-700 transition">
                Submit Application
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
