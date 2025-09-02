// app/blogs/post-careers-bpo/page.tsx
"use client";
import Header from "../../header/page";
import Footer from "../../footer/page";
export default function CareersBPOPage() {
  return (
      <>
        <div className="min-h-screen bg-white text-slate-800">
           <Header />
       <main className="container mx-auto max-w-7xl  px-4 py-10">
      <h1 className="text-3xl font-semibold">
        Careers in US Logistics BPO – Mohali
      </h1>
      <p className="mt-1 text-sm text-slate-500">Aug 26, 2025 • People Ops</p>

      <article className="prose mt-6 max-w-none">
        <p>
          We’re hiring experienced agents who’ve handled TMS/CRM and US voice
          processes. Learn about roles, growth paths, and benefits—plus how our
          QA coaching model accelerates development.
        </p>
        <p>
          Applicants with Zoho, Turvo, and RingCentral exposure ramp faster and
          deliver outcomes sooner.
        </p>
      </article>
   </main>
        </div>
          <Footer />
          </>
  );
}
