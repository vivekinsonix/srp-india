// app/benefits/page.tsx  (or wherever you want this page)
'use client';
import HeroSection from '@/app/components/subheader/AppHeroSection';
import { getCareersBenifits } from '@/app/services';
import SpinnerService from '@/app/services/SpinnerService';
import { CareersBenifits } from '@/app/utils/interfaces';
import { Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Benefits() {
  const [benifits, setBenifits] = useState<CareersBenifits[]>([]);

  useEffect(() => {
    SpinnerService.showSpinner();
    getCareersBenifits()
      .then((res) => {
        setBenifits(res?.data || []);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => SpinnerService.hideSpinner());
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-white text-slate-800">
        <HeroSection backgroundImage="/hero-bg.jpg" eyebrow="Benefits" title="Benefits" highlight="Join a team " description="Join a team that blends US-grade process rigor with Indian ingenuity. We’re hiring experienced BPO/logistics professionals who want to lead outcomes, not just tasks." primaryAction={{ label: 'Learn More', href: '/about' }} secondaryAction={{ label: 'Contact Us', href: '/contact' }} />
        <main className="container mx-auto max-w-7xl px-4 py-10">
          {benifits.map((item: CareersBenifits) => (
            <Card className="mt-6 grid gap-6 p-6 md:grid-cols-2">
              <ReactMarkdown>{item.content}</ReactMarkdown>
            </Card>
          ))}
        </main>
      </div>
    </>
  );
}
