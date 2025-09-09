// app/working-at-srp/page.tsx (Next.js App Router)

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import HeroSection from "@/components/subheader/AppHeroSection";

export default function WorkingAtSRPPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <Header />
        <HeroSection
          backgroundImage="/hero-bg.jpg"
          eyebrow="SRP"
          title="Working"
          highlight="at SRP"
          description="We’re an India operations hub for a US group. The work is fast,
            structured, and rewarding—made for experienced BPO talent that wants
            real impact."
          primaryAction={{ label: "Learn More", href: "/about" }}
          secondaryAction={{ label: "Contact Us", href: "/contact" }}
        />
        <main className=" mx-auto max-w-7xl px-4 py-10">
     
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {/* How we work */}
            <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">How we work</h3>
              <ul className="mt-2 text-sm list-disc pl-6 space-y-1 text-slate-700">
                <li>Clear playbooks and SLA-based operations</li>
                <li>QA scorecards and weekly coaching</li>
                <li>Respect for time, transparent schedules</li>
              </ul>
            </div>

            {/* Growth */}
            <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Growth</h3>
              <ul className="mt-2 text-sm list-disc pl-6 space-y-1 text-slate-700">
                <li>Learning stipend & certifications</li>
                <li>Internal mobility across ops roles</li>
                <li>Performance bonuses</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">Tools</h3>
              <p className="mt-2 text-sm text-slate-700">
                Zoho One (CRM/HR), RingCentral (voice QA), Turvo (TMS), DAT (freight
                sourcing).
              </p>
            </div>
          </div>
        </main>

      </div>
      <Footer />
    </>
  );
}
