// app/benefits/page.tsx  (or wherever you want this page)
"use client";
import Header from "../../header/page";
import Footer from "../../footer/page";
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
       <div className="min-h-screen bg-white text-slate-800">
          <Header />
  <main className="container mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Benefits</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <h3 className="font-semibold">{item.title}</h3>
            <ul className="mt-2 list-disc pl-6 text-sm text-gray-700 dark:text-gray-300">
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
