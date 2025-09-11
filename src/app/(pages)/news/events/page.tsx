// app/events/page.tsx
"use client";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import HeroSection from "@/app/components/subheader/AppHeroSection";
export default function EventsPage() {
  const events = [
    {
      date: "Aug 2025",
      title: "Campus visit by dignitaries",
      desc: "Recap, photos, and media coverage from the event.",
      link: "#",
      cta: "Read more →",
    },
    {
      date: "Jul 2025",
      title: "Youth talk on BPO careers",
      desc: "Key takeaways for local talent and first-time professionals.",
      link: "../careers/openings/opening-senior-bpo-agent",
      cta: "Read more →",
    },
    {
      date: "Jun 2025",
      title: "Podcast: Scaling brokerage from Mohali",
      desc: "A conversation on operations, training, and community impact.",
      link: "../careers/openings/opening-senior-bpo-agent",
      cta: "Listen →",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <Header />
        <HeroSection
          backgroundImage="/hero-bg.jpg"
          eyebrow="Events"
          title="Events"
          highlight=""
          description="Company posts, event recaps, a downloadable media library, and a media relations contact point for interviews and campus visits."
          primaryAction={{ label: "Learn More", href: "/about" }}
          secondaryAction={{ label: "Contact Us", href: "/contact" }}
        />
        <main className="container mx-auto max-w-7xl px-4 py-10">
       

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {events.map((e, idx) => (
              <article
                key={idx}
                className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="text-xs text-slate-500">{e.date}</div>
                <h2 className="text-lg font-semibold mt-1">{e.title}</h2>
                <p className="mt-2 text-slate-700">{e.desc}</p>
                <a
                  className="mt-3 inline-block font-semibold text-teal-700 hover:underline"
                  href={e.link}
                >
                  {e.cta}
                </a>
              </article>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
