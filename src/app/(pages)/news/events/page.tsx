// app/events/page.tsx
'use client';
import HeroSection from '@/app/components/subheader/AppHeroSection';
import { getEvents } from '@/app/services';
import SpinnerService from '@/app/services/SpinnerService';
import { useEffect, useState } from 'react';

interface EventGallery {
  url: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  summary: string;
  gallery: EventGallery[];
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    SpinnerService.showSpinner();
    getEvents()
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => SpinnerService.hideSpinner());
  }, []);

  console.log(events);

  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <HeroSection backgroundImage="/hero-bg.jpg" eyebrow="Events" title="Events" highlight="" description="Company posts, event recaps, a downloadable media library, and a media relations contact point for interviews and campus visits." primaryAction={{ label: 'Learn More', href: '/about' }} secondaryAction={{ label: 'Contact Us', href: '/contact' }} />
        <main className="container mx-auto max-w-7xl px-4 py-10">
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {events.map((e, idx) => (
              <article key={idx} className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md">
                <video src={e?.gallery[0]?.url} width={600} height={400} className="h-48 w-full object-cover" autoPlay muted loop playsInline />
                <div className="text-xs text-slate-500">{e.date}</div>
                <h2 className="text-lg font-semibold mt-1">{e.title}</h2>
                <p className="mt-2 text-slate-700">{e.summary}</p>
                <a className="mt-3 inline-block font-semibold text-teal-700 hover:underline" href={`/events/${e.id}`}>
                  read more
                </a>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
