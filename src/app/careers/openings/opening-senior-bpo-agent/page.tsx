// app/careers/opening-qa-voice/page.tsx
"use client";
import Header from "../../../header/page";
import Footer from "../../../footer/page";
export default function QAVoiceOpening() {
  return (
     <>
       <div className="min-h-screen bg-white text-slate-800">
          <Header />
   <main className="container mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">
        Senior BPO Agent – US Logistics
      </h1>
      <p className="mt-1 text-sm text-slate-600">
        Mohali, Punjab (On-site) • 2–4 years
      </p>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {/* Job Details */}
        <div className="prose max-w-none">
          <h2>Responsibilities</h2>
          <ul>
            <li>Handle inbound/outbound calls via RingCentral with QA-ready notes</li>
            <li>Update Turvo statuses; coordinate exceptions with US team</li>
            <li>Maintain 100% Zoho CRM hygiene</li>
            <li>Coach juniors; uphold SOPs</li>
          </ul>

          <h2>Requirements</h2>
          <ul>
            <li>Excellent English (neutral accent)</li>
            <li>Hands-on with CRM/TMS (Zoho, Turvo preferred)</li>
            <li>Availability for US time zones</li>
          </ul>
        </div>

        {/* Application Form */}
        <form
          className="grid gap-3 rounded-xl border border-slate-200 p-6 shadow-sm"
          action="#"
          method="post"
        >
          <h3 className="font-semibold text-lg">Apply now</h3>

          <input
            required
            placeholder="Full name"
            className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            placeholder="Phone"
            className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            placeholder="Years of relevant experience"
            className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            placeholder="Why you? (2–3 lines)"
            className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>

          <button
            type="submit"
            className="rounded-xl bg-teal-600 px-4 py-2 font-semibold text-white hover:bg-teal-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </main>
       </div>
             
                <Footer />
                </>
  );
}
