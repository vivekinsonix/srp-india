'use client';

import { useState } from 'react';
// Update the import path below if the Header component is located elsewhere
import Header from '@/app/components/header/Header';
import HeroSection from '@/app/components/subheader/AppHeroSection';
import Footer from '@/app/components/footer/Footer';

export default function Contacts() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return alert('Please enter your email.');
    // Replace this with an API call or email service
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <Header />
        <HeroSection backgroundImage="/hero-bg.jpg" eyebrow="Contact" title="Contact " highlight="Us" description="If Any Query , Reach us Any Time" primaryAction={{ label: 'Learn More', href: '/about' }} secondaryAction={{ label: 'Contact Us', href: '/contact' }} />
        <main className="container mx-auto max-w-7xl px-4 py-10">
          <h1 className="text-3xl font-semibold">Contact</h1>

          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {/* India HQ */}
            <div>
              <h4 className="font-semibold">India HQ (Mohali)</h4>
              <p className="mt-2 text-sm text-slate-600">Plot No. 605, Industrial Area Phase 9, SAS Nagar, Punjab 160062</p>
              <p className="mt-2 text-sm">Phone: +91 9779178726</p>
              <p className="text-sm">
                Email:{' '}
                <a href="mailto:info@srpuslogistics.com" className="hover:text-teal-700 underline underline-offset-2">
                  info@srpuslogistics.com
                </a>
              </p>
            </div>

            {/* Media & Partnerships */}
            <div>
              <h4 className="font-semibold">Media &amp; Partnerships</h4>
              <p className="mt-2 text-sm text-slate-600">
                For media queries and partnerships, write to <em>media@srpuslogistics.com</em>
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold">Newsletter</h4>
              <form
                className="mt-2 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubscribe();
                }}
              >
                <input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 rounded-xl border border-gray-300 px-3 py-2 " />
                <button type="submit" className="rounded-xl border border-teal-600 px-4 py-2 font-semibold text-teal-700 transition hover:bg-teal-600 hover:text-white dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
