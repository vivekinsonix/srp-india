// app/our-culture/page.tsx
'use client';
import HeroSection from '@/app/components/subheader/AppHeroSection';
import { getCareersCulture } from '@/app/services';
import { CareersBenifits } from '@/app/utils/interfaces';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function OurCulture() {
  const [culture, setCulture] = useState<CareersBenifits[]>([]);

  useEffect(() => {
    getCareersCulture().then((res) => {
      setCulture(res?.data || []);
    });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <HeroSection
          backgroundImage="/hero-bg.jpg"
          eyebrow="Culture"
          title="Our"
          highlight="Culture"
          description="We prioritize clarity, fairness, and ownership. Teams are small, expectations
            are explicit, and leaders coach continuously."
          primaryAction={{ label: 'Learn More', href: '/about' }}
          secondaryAction={{ label: 'Contact Us', href: '/contact' }}
        />
        <main className="container mx-auto max-w-7xl px-4 py-10">
          {culture.map((e) => (
            <ReactMarkdown>{e.content}</ReactMarkdown>
          ))}
        </main>
      </div>
    </>
  );
}
