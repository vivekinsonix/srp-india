// app/careers/page.tsx
"use client";
import Header from "../../header/page";
import Footer from "../../footer/page";

export default function Careers() {
  return (
     <>
       <div className="min-h-screen bg-white text-slate-800">
          <Header />
  <main className="container mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Open Positions</h1>
      <p className="mt-2 text-slate-600">
        We hire year-round for US logistics processes. Below are two sample roles.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-slate-200 p-6 shadow-sm transition hover:shadow">
          <h2 className="text-lg font-semibold">
            Senior BPO Agent – US Logistics
          </h2>
          <p className="text-sm text-slate-600">
            Mohali, Punjab (On-site) • 2–4 years
          </p>
          <p className="mt-2">
            Own end-to-end call handling, load status updates, and CRM hygiene.
            Prior US logistics/BPO required.
          </p>
          <a
            className="mt-3 inline-block font-semibold text-teal-700 hover:underline"
            href="/careers/openings/opening-senior-bpo-agent"
          >
            View details →
          </a>
        </article>

        <article className="rounded-lg border border-slate-200 p-6 shadow-sm transition hover:shadow">
          <h2 className="text-lg font-semibold">
            Quality Analyst – Voice (RingCentral)
          </h2>
          <p className="text-sm text-slate-600">
            Mohali, Punjab (On-site) • 3+ years
          </p>
          <p className="mt-2">
            Audit calls, score agents, and partner with ops for continuous
            improvement.
          </p>
          <a
            className="mt-3 inline-block font-semibold text-teal-700 hover:underline"
            href="/careers/openings/opening-qa-voice"
          >
            View details →
          </a>
        </article>
      </div>
       
         </main>
         </div>
           <Footer />
           </>
  );
}
