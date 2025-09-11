// app/benefits/page.tsx  (or wherever you want this page)
"use client";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import HeroSection from "@/app/components/subheader/AppHeroSection";
export default function Benefits() {
  const items = [
    {
      title: "Compensation",
      points: [
        "Competitive salary with night-shift allowance",
        "Performance bonus linked to QA/SLAs",
        "Overtime in line with policy",
      ],
    },
    {
      title: "Growth",
      points: [
        "Learning stipend & certifications",
        "Cross-training on tools (Zoho, Turvo, RingCentral)",
        "Leadership pathways",
      ],
    },
    {
      title: "Wellbeing",
      points: [
        "Safe commute timings & policy",
        "Paid leave & holiday calendar",
        "Access to counseling partners",
      ],
    },
    {
      title: "Community",
      points: [
        "CSR volunteering options",
        "Company events and recognition",
        "Alumni network",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-white text-slate-800">
        <Header />
        <HeroSection
          backgroundImage="/hero-bg.jpg"
          eyebrow="Benefits"
          title="Benefits"
          highlight="Join a team "
          description="Join a team that blends US-grade process rigor with Indian ingenuity. We’re hiring experienced BPO/logistics professionals who want to lead outcomes, not just tasks."
          primaryAction={{ label: "Learn More", href: "/about" }}
          secondaryAction={{ label: "Contact Us", href: "/contact" }}
        />
        <main className="container mx-auto max-w-7xl px-4 py-10">
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <ul className="mt-2 list-disc pl-6 text-sm text-gray-700 ">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </main>
      </div>
      <Footer />
    </>
  );
}
