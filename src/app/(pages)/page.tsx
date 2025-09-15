// SRP India – React/Next.js Frontend (single-file demo)
// Drop this file into a Next.js 13+ app as app/page.tsx (or pages/index.tsx with slight tweaks)
// TailwindCSS recommended. If not using Tailwind, replace classNames with your CSS.
'use client';

import { Card } from 'flowbite-react';
import { CheckCircleIcon } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import HeroSection from '../components/header/HeroBanner';
import RichTextRenderer from '../components/RichText/RichTextHandler';
import { getBlogs, getPaginatedEvent, getPaginatedOpenings } from '../services';
import SpinnerService from '../services/SpinnerService';
import { BlogPost, Events, Job } from '../utils/interfaces';
import { formatDate, truncateContent } from '../utils/utility';

const JOBS = [
  {
    id: 'senior-bpo-agent',
    title: 'Senior BPO Agent – US Logistics',
    location: 'Mohali, Punjab (On-site)',
    exp: '2–4 years in US logistics/BPO',
    tags: ['Night Shift', 'US Voice', 'Zoho', 'Turvo'],
    description: 'Own end-to-end call handling, load status updates, and CRM hygiene. Prior US logistics or brokerage BPO required.',
    responsibilities: ['Handle inbound/outbound calls via RingCentral with QA-ready notes', 'Update load statuses; coordinate with US team on exceptions', 'Maintain Zoho hygiene; log 100% interactions', 'Coach juniors; uphold process SOPs'],
    requirements: ['Excellent English (neutral accent)', 'Hands-on with any CRM (Zoho preferred)', 'TMS familiarity (Turvo preferred)', 'Availability for US time zones'],
  },
  {
    id: 'qa-analyst',
    title: 'Quality Analyst – Voice (RingCentral)',
    location: 'Mohali, Punjab (On-site)',
    exp: '3+ years QA in contact center',
    tags: ['QA', 'Call Audits', 'Coaching'],
    description: 'Audit calls, score agents, and partner with ops for continuous improvement.',
    responsibilities: ['Calibrate QA scorecards and run audits', 'Publish weekly quality insights and training needs', 'Own coaching plans with Team Leads'],
    requirements: ['Strong English and documentation', 'Experience with RingCentral or similar', 'BPO QA experience'],
  },
];

const Badge = ({ children }: { children: React.ReactNode }) => <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">{children}</span>;

const Section = ({ id, title, children, muted }: any) => (
  <section id={id} className={`${muted ? 'bg-slate-50' : 'bg-white'} py-16`}>
    <div className="mx-auto max-w-7xl px-4">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  </section>
);

export default function SRPIndiaSite() {
  const [activeBlog, setActiveBlog] = useState<string | null>(null);
  const [jobQuery, setJobQuery] = useState('');
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [events, setEvents] = useState<Events[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const mainBlog = blogs.find((b) => b.is_main === true);

  const otherBlogs = useMemo(() => blogs.filter((b) => !b.is_main), [blogs]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        SpinnerService.showSpinner();
        const [blogsRes, eventsRes, jobRes] = await Promise.all([getBlogs(), getPaginatedEvent(1, 3), getPaginatedOpenings(1, 3)]);
        setBlogs(blogsRes.data);
        setEvents(eventsRes.data);
        setJobs(jobRes?.data);
      } catch (err) {
        console.log(err);
      } finally {
        SpinnerService.hideSpinner();
      }
    };

    fetchData();
  }, []);

  const filteredJobs = useMemo(() => {
    if (!jobQuery) return JOBS;
    const q = jobQuery.toLowerCase();
    return JOBS.filter((j) => j.title.toLowerCase().includes(q) || j.tags.join(' ').toLowerCase().includes(q));
  }, [jobQuery]);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <HeroSection />
      <Section id="founder" title="Leadership Initiatives">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <p>
              Through his work at SRP, Rajwinder Singh Boparai has built platforms for employment, training, and regional engagement, making Mohali a fast growing hub for logistics, technology and community partnerships. He is recognized across Punjab and also North region of India for youth engagement and community initiatives, Mr. Boparai frequently hosts dignitaries and media at our Mohali campus and himself visits esteemed
              institutions to share valuable insights.
            </p>
            <p>Contact us if you are looking for press kits, event invites, and podcast bookings.</p>
            <ul className="space-y-2">
              {['Media kit: bio, photos, logo pack, factsheet', 'Speaking & podcast requests', 'Event coverage & campus visits'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-teal-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <a className="rounded-xl bg-teal-600 px-4 py-2 text-white" href="#events">
                See Events
              </a>
              <a className="rounded-xl border px-4 py-2" href="#blog">
                Read Stories
              </a>
            </div>
          </div>
          <aside className="rounded-2xl border p-4">
            <h4 className="font-semibold">In the news</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Punjab News Express – Youth talk on BPO careers (coverage)</li>
              <li>Academic delegation – skills & career pathways</li>
              <li>Local CSR & employment initiatives in Mohali</li>
            </ul>
          </aside>
        </div>
      </Section>

      <Section
        id="careers"
        title={
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Careers – Experienced US Logistics BPO</h2>
            <Link href="/careers/openings" className="text-sm font-medium text-teal-700 hover:underline">
              View All →
            </Link>
          </div>
        }
      >
        <div className="flex items-center justify-between gap-4">
          <p className="text-slate-600">We hire experienced agents with US voice/process exposure.</p>
          <input placeholder="Search roles (e.g., QA, Turvo, Zoho)" className="w-64 rounded-xl border px-3 py-2 text-sm" value={jobQuery} onChange={(e) => setJobQuery(e.target.value)} />
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {jobs.map((j) => (
            <div key={j.id} className="rounded-2xl border p-5 hover:shadow">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold">{j.title}</h3>
                <div className="ml-auto flex gap-2">
                  {JSON.parse(j.tags[0].children[0]?.text).map((t: any) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {j.location} • {j.experience}
              </p>
              <p className="mt-3">{j.description}</p>
              <div className="mt-4 flex gap-3">
                <a href={`#apply-${j.id}`} className="rounded-xl bg-teal-600 px-4 py-2 text-white">
                  Apply
                </a>
                <button className="rounded-xl border px-4 py-2" onClick={() => setActiveBlog('careers-bpo-us-logistics-mohali')}>
                  Learn More
                </button>
              </div>
              <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold">Responsibilities</h4>
                  <RichTextRenderer content={truncateContent(j.responsibilities)} />
                </div>
                <div>
                  <h4 className="font-semibold">Requirements</h4>
                  <RichTextRenderer content={truncateContent(j.requirements)} />
                </div>
              </div>

              {/* Apply form anchor */}
              <form id={`apply-${j.id}`} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                <input required placeholder="Full name" className="rounded-xl border px-3 py-2" />
                <input required type="email" placeholder="Email" className="rounded-xl border px-3 py-2" />
                <input required placeholder="Phone" className="rounded-xl border px-3 py-2" />
                <input placeholder="Years of relevant experience" className="rounded-xl border px-3 py-2" />
                <input placeholder="Previous employer(s)" className="rounded-xl border px-3 py-2 md:col-span-2" />
                <textarea placeholder="Why you? (2–3 lines)" className="rounded-xl border px-3 py-2 md:col-span-2" />
                <div className="flex items-center gap-2 text-sm md:col-span-2">
                  <input id={`night-${j.id}`} type="checkbox" className="h-4 w-4" />
                  <label htmlFor={`night-${j.id}`}>Comfortable with US time zones / night shift</label>
                </div>
                <button type="submit" className="mt-2 rounded-xl bg-teal-600 px-4 py-2 text-white md:col-span-2">
                  Submit Application
                </button>
              </form>
            </div>
          ))}
        </div>
      </Section>

      {/* Events / News */}
      <Section
        id="events"
        title={
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Events • News • Press</h2>
            <Link href="/news/events" className="text-sm font-medium text-teal-700 hover:underline">
              View All →
            </Link>
          </div>
        }
      >
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e) => (
            <article key={e.title} className="rounded-2xl border p-5 hover:shadow">
              <div className="flex items-center gap-2 text-xs">
                <Badge>{e?.category}</Badge>
                <span className="text-slate-500">{e.date}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm text-slate-600">Short summary of the event and a link to full coverage, photos and video embeds.</p>
              <Link href={`/news/events/details/${e.slug}`} className="mt-4 inline-block text-teal-700 font-semibold">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="blog"
        muted
        title={
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Blog & Stories</h2>
            <Link href="/blogs" className="text-sm font-medium text-teal-700 hover:underline">
              View All →
            </Link>
          </div>
        }
      >
        <div className="grid md:grid-cols-8 gap-6">
          {/* Left side: first two blogs */}
          <aside className="md:col-span-2  space-y-4">
            {otherBlogs.slice(0, 2).map((b) => (
              <Card key={b.slug} className="mb-3 hover:shadow">
                <Image src={b?.coverImage?.url} alt={b.title} width={600} height={300} className="h-40 w-full object-cover rounded-t-lg" />
                <div className="p-3">
                  <h3 className="text-lg font-semibold">{b.title}</h3>
                  <p className="text-xs text-slate-500">
                    {formatDate(b?.publishedAt)} • {b.author}
                  </p>
                  <p className="mt-2 text-slate-700">{b.excerpt}</p>
                  <Link href={`blogs/details/${b.slug}`} className="mt-3 inline-block text-teal-700 font-semibold">
                    Read More →
                  </Link>
                </div>
              </Card>
            ))}
          </aside>

          {/* Center: main blog */}
          <main className="md:col-span-4">
            {mainBlog && (
              <Card key={mainBlog.slug} className="mb-4 hover:shadow-lg">
                <Head>
                  <title>{mainBlog.Seo.metaTitle}</title>
                  <meta name="description" content={mainBlog.Seo.metaDescription} />
                  {mainBlog.Seo.keywords && <meta name="keywords" content={mainBlog.Seo.keywords} />}
                  {mainBlog.Seo.metaRobots && <meta name="robots" content={mainBlog.Seo.metaRobots} />}
                  {mainBlog.Seo.canonicalURL && <link rel="canonical" href={mainBlog.Seo.canonicalURL} />}
                  {mainBlog.Seo.structuredData && <script type="application/ld+json">{mainBlog.Seo.structuredData}</script>}
                </Head>
                <Image src={mainBlog?.coverImage?.url} alt={mainBlog.title} width={800} height={600} className="h-72 w-full object-cover rounded-t-lg" />
                <div className="p-3">
                  <h2 className="text-2xl font-bold">{mainBlog.title}</h2>
                  <p className="text-sm text-slate-500">
                    {formatDate(mainBlog?.publishedAt)} • {mainBlog.author}
                  </p>
                  <p className="mt-3 text-slate-700">{mainBlog.excerpt}</p>
                  <RichTextRenderer content={truncateContent(mainBlog.content)} />
                  <Link href={`/blogs/details/${mainBlog.slug}`} className="mt-4 inline-block text-teal-700 font-semibold">
                    Read More →
                  </Link>
                </div>
              </Card>
            )}
          </main>

          {/* Right side: next two blogs */}
          <aside className="md:col-span-2 space-y-4">
            {otherBlogs.slice(2, 4).map((b) => (
              <Card key={b.slug} className="mb-3  hover:shadow">
                <div className="p-3">
                  <h3 className="text-lg font-semibold">{b.title}</h3>
                  <p className="text-xs text-slate-500">
                    {formatDate(b?.publishedAt)} • {b.author}
                  </p>
                  <p className="mt-2 text-slate-700">{b.excerpt}</p>
                  <RichTextRenderer content={truncateContent(b.content)} />
                  <Link href={`blogs/details/${b.slug}`} className="mt-3 inline-block text-teal-700 font-semibold">
                    Read More →
                  </Link>
                </div>
              </Card>
            ))}
          </aside>
        </div>
      </Section>

      {/* Contact / Footer */}
      <Section id="contact" title="Contact & India Operations">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold">India HQ (Mohali)</h4>
            <p className="mt-2 text-sm text-slate-600">Plot No. 605, Industrial Area Phase 9, SAS Nagar, Punjab 160062</p>
            <p className="mt-2 text-sm">Phone: +91 9779178726</p>
            <p className="text-sm">Email: info@srpuslogistics.com</p>
          </div>
          <div>
            <h4 className="font-semibold">Expand with Us</h4>
            <p className="mt-2 text-sm text-slate-600">We’re exploring additional call-center processes for Indian businesses. Partners welcome.</p>
            <a href="#careers" className="mt-3 inline-block rounded-xl bg-teal-600 px-4 py-2 text-white">
              Partner / Apply
            </a>
          </div>
          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <form className="mt-2 flex gap-2">
              <input placeholder="you@company.com" className="flex-1 rounded-xl border px-3 py-2" />
              <button className="rounded-xl bg-slate-900 px-4 py-2 text-white">Subscribe</button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-2xl bg-slate-800/60 p-4 text-center">
      <div className="text-2xl font-semibold text-white">{kpi}</div>
      <div className="text-xs text-slate-300 mt-1">{label}</div>
    </div>
  );
}

function Markdown({ content }: { content: string }) {
  return (
    <div className="prose">
      {content.split('\n\n').map((block, i) => {
        if (block.startsWith('# ')) {
          return <h2 key={i}>{block.replace(/^#\s+/, '')}</h2>;
        }
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}
