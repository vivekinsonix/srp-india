import Link from 'next/link';
import HeroSection from '../../components/subheader/AppHeroSection';

export default function Careers() {
  const items = [
    {
      title: 'Culture',
      desc: 'What we value and how we operate.',
      link: '/careers/culture',
    },
    {
      title: 'Benefits',
      desc: 'Pay, perks, and growth support.',
      link: '/careers/benefits',
    },
    {
      title: 'Openings',
      desc: 'Apply to active roles.',
      link: '/careers/openings',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <HeroSection backgroundImage="/hero-bg.jpg" eyebrow="Careers" title="Careers" highlight="Join a team " description="Join a team that blends US-grade process rigor with Indian ingenuity. We’re hiring experienced BPO/logistics professionals who want to lead outcomes, not just tasks." primaryAction={{ label: 'Learn More', href: '/about' }} secondaryAction={{ label: 'Contact Us', href: '/contact' }} />
        <main className="container mx-auto max-w-7xl px-4 py-10">
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {items.map((item) => (
              <li key={item.link} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <Link href={item.link} className="text-teal-700 font-semibold hover:underline ">
                  {item.title} →
                </Link>
                <p className="mt-2 text-sm text-gray-600 ">{item.desc}</p>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
