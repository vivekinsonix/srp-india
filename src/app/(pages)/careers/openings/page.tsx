'use client';
import HeroSection from '@/app/components/subheader/AppHeroSection';
import { getOpenings } from '@/app/services';
import SpinnerService from '@/app/services/SpinnerService';
import { Job } from '@/app/utils/interfaces';
import { useEffect, useState } from 'react';

export default function Openings() {
  const [openings, setOpenings] = useState<Job[]>([]);
  const [jobQuery, setJobQuery] = useState('');

  useEffect(() => {
    SpinnerService.showSpinner();
    getOpenings()
      .then((res) => {
        if (res?.data?.length > 0) {
          setOpenings(res.data);
        } else {
          setOpenings([]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => SpinnerService.hideSpinner());
  }, []);

  const filteredOpenings = openings.filter((job) => {
    let tags: string[] = [];
    try {
      const text = job?.tags?.[0]?.children?.[0]?.text;
      if (text) {
        tags = JSON.parse(text);
      }
    } catch (err) {
      console.warn('Invalid tags JSON', err);
    }

    const haystack = [job.title, job.description, tags.join(' ')].join(' ').toLowerCase();
    return haystack.includes(jobQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <HeroSection backgroundImage="/hero-bg.jpg" eyebrow="SRP" title="Open" highlight="Positions" description="We hire year-round for US logistics processes. Below are two sample roles." primaryAction={{ label: 'Learn More', href: '/about' }} secondaryAction={{ label: 'Contact Us', href: '/contact' }} />
      <main className="container mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-center justify-between gap-4">
          <p className="text-slate-600">We hire experienced agents with US voice/process exposure.</p>
          <input placeholder="Search roles (e.g., QA, Turvo, Zoho, Night Shift)" className="w-64 rounded-xl border px-3 py-2 text-sm" value={jobQuery} onChange={(e) => setJobQuery(e.target.value)} />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {filteredOpenings.map((job: Job) => (
            <article key={job.slug} className="rounded-lg border border-slate-200 p-6 shadow-sm transition hover:shadow">
              <h2 className="text-lg font-semibold">{job?.title || ''}</h2>
              <p className="text-sm text-slate-600">
                {job.location} • {job.experience}
              </p>
              <p className="mt-2">{job.description}</p>
              <a className="mt-3 inline-block font-semibold text-teal-700 hover:underline" href={`/careers/openings/details/${job.slug}`}>
                View details →
              </a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
