// app/events/page.tsx
"use client";
import Header from "../../header/page";
import Footer from "../../footer/page";
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
      link: "#",
      cta: "Read more →",
    },
    {
      date: "Jun 2025",
      title: "Podcast: Scaling brokerage from Mohali",
      desc: "A conversation on operations, training, and community impact.",
      link: "#",
      cta: "Listen →",
    },
  ];

  return (
        <>
         <div className="min-h-screen bg-white text-slate-800">
            <Header />
    <main className="container mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Events</h1>

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
